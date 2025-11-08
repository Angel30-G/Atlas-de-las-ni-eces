import { useState, useRef } from 'react';
import { Box, Button, Typography, CircularProgress, Alert } from '@mui/material';
import { useTheme } from '@/theme/ThemeProvider';

interface ImageUploadProps {
  onImageUpload: (imageUrl: string) => void;
  disabled?: boolean;
}

export default function ImageUpload({ onImageUpload, disabled = false }: ImageUploadProps) {
  const { theme } = useTheme();
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Resetear estados
    setError(null);
    setDebugInfo('');

    // Validaciones
    if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
  setError('Formato no permitido. Solo se permiten JPEG, PNG o GIF.');
  return;
}

    if (file.size > 10 * 1024 * 1024) { // 10MB max
      setError('La imagen es demasiado grande. Máximo 10MB permitido.');
      return;
    }

    // Crear preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    // Iniciar upload
    handleUpload(file);
  };

  const handleUpload = async (file: File) => {
    setUploading(true);
    setError(null);
    setDebugInfo(`Iniciando upload: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`);

    try {
      const formData = new FormData();
      formData.append('image', file);

      setDebugInfo(prev => prev + '\nEnviando a /api/upload...');

      const response = await fetch('/upload', {
        method: 'POST',
        body: formData,
      });

      setDebugInfo(prev => prev + `\nRespuesta recibida: ${response.status}`);

      // Verificar si la respuesta es JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        setDebugInfo(prev => prev + `\nContenido recibido: ${text.substring(0, 200)}...`);
        throw new Error(`El servidor respondió con: ${response.status} - ${response.statusText}. Contenido: ${text.substring(0, 100)}`);
      }

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || `Error ${response.status}: ${response.statusText}`);
      }

      if (result.success) {
        setDebugInfo(prev => prev + `\n✅ Éxito! URL: ${result.imageUrl}`);
        onImageUpload(result.imageUrl);
      } else {
        throw new Error(result.error || 'Error desconocido al subir la imagen');
      }
    } catch (error) {
      console.error('Error completo subiendo imagen:', error);
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido al subir la imagen';
      setError(errorMessage);
      setDebugInfo(prev => prev + `\n❌ Error: ${errorMessage}`);
    } finally {
      setUploading(false);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleReset = () => {
    setPreview(null);
    setError(null);
    setDebugInfo('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <Box sx={{ textAlign: 'center', p: 2 }}>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        ref={fileInputRef}
        style={{ display: 'none' }}
        disabled={disabled || uploading}
      />

      {error && (
        <Alert severity="error" sx={{ mb: 2, textAlign: 'left' }}>
          <strong>Error:</strong> {error}
        </Alert>
      )}

      {preview ? (
        <Box sx={{ mb: 2 }}>
          <img
            src={preview}
            alt="Vista previa"
            style={{
              maxWidth: '100%',
              maxHeight: '200px',
              borderRadius: '8px',
              border: `2px solid ${theme.primary}`
            }}
          />
          <Button
            onClick={handleReset}
            variant="outlined"
            size="small"
            sx={{ mt: 1 }}
          >
            Elegir otra imagen
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            border: `2px dashed ${theme.primary}60`,
            borderRadius: '12px',
            p: 3,
            mb: 2,
            backgroundColor: `${theme.background}80`,
            cursor: disabled || uploading ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: disabled || uploading ? 'inherit' : `${theme.primary}15`,
              borderColor: theme.primary,
            }
          }}
          onClick={disabled || uploading ? undefined : handleClick}
        >
          <Typography variant="body1" sx={{ mb: 1, color: theme.text2 }}>
            {uploading ? '⏳ Subiendo...' : '📸 Haz clic para seleccionar imagen'}
          </Typography>
          <Typography variant="body2" sx={{ color: theme.text2, opacity: 0.8 }}>
            {uploading ? 'Por favor espera...' : 'Arrastra o haz clic para subir una imagen'}
          </Typography>
          <Typography variant="caption" sx={{ display: 'block', mt: 1, color: theme.text2, opacity: 0.6 }}>
            Formatos: JPEG, PNG, GIF • Máximo: 10MB
          </Typography>
        </Box>
      )}

      <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Button
          variant="contained"
          onClick={handleClick}
          disabled={disabled || uploading}
          startIcon={uploading ? <CircularProgress size={16} /> : undefined}
          sx={{
            backgroundColor: theme.primary,
            '&:hover': {
              backgroundColor: theme.secondary,
            }
          }}
        >
          {uploading ? 'Subiendo...' : 'Seleccionar Imagen'}
        </Button>

        {preview && !uploading && (
          <Button
            variant="outlined"
            onClick={handleReset}
            sx={{
              borderColor: theme.text2,
              color: theme.text2,
            }}
          >
            Cancelar
          </Button>
        )}
      </Box>

      {/* Información de debug (solo en desarrollo) */}
      {process.env.NODE_ENV === 'development' && debugInfo && (
        <Box sx={{ mt: 2, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1, textAlign: 'left' }}>
          <Typography variant="caption" component="pre" sx={{ fontSize: '10px', whiteSpace: 'pre-wrap' }}>
            {debugInfo}
          </Typography>
        </Box>
      )}

      {uploading && (
        <Box sx={{ mt: 2 }}>
          <CircularProgress size={24} />
          <Typography variant="caption" sx={{ display: 'block', mt: 1, color: theme.text2 }}>
            Subiendo imagen, por favor espera...
          </Typography>
        </Box>
      )}
    </Box>
  );
}