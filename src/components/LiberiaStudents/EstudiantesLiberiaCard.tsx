"use client";
import { 
  Card, 
  CardContent, 
  Typography, 
  List, 
  ListItem, 
  Divider,
  Box,
  Stack
} from "@mui/material";
import { useTheme } from "@/theme/ThemeProvider";
import GroupIcon from "@mui/icons-material/Group";

interface EstudiantesLiberiaCardProps {
  grupo: string;
  estudiantes: string[];
}

export default function EstudiantesLiberiaCard({
  grupo,
  estudiantes
}: EstudiantesLiberiaCardProps) {
  const { theme } = useTheme();

  return (
    <Card sx={{
      borderRadius: 3,
      boxShadow: 3,
      height: '100%',
    }}>
      <CardContent>
        <Stack direction="row" spacing={1} sx={{ mb: 3, justifyContent: 'center', alignItems: 'center' }}>
          <GroupIcon sx={{ color: theme.primary, fontSize: '2rem' }} />
          <Typography 
            variant="h6" 
            sx={{ 
              color: theme.primary,
              fontWeight: 'bold'
            }}
          >
            {grupo}
          </Typography>
        </Stack>
        
        <Divider sx={{ 
          bgcolor: theme.primary,
          height: 2,
          mb: 2
        }} />
        
        <Stack direction="row" flexWrap="wrap" justifyContent="center">
          {estudiantes.map((estudiante, index) => (
            <Typography 
              key={index}
              variant="body1"
              sx={{
                width: { xs: '100%', sm: '30%' },
                p: 1,
              }}
            >
              • {estudiante}
            </Typography>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}