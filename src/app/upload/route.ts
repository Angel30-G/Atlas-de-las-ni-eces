import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function GET() {
  console.log('✅ GET /upload called');
  return NextResponse.json({ 
    message: 'Upload API is working!',
    status: 'OK',
    timestamp: new Date().toISOString()
  });
}

export async function POST(request: NextRequest) {
  console.log('📍 POST /upload called');
  
  try {
    const formData = await request.formData();
    const file = formData.get('image') as File;

    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No file provided' },
        { status: 400 }
      );
    }

    // Crear directorio
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    await mkdir(uploadsDir, { recursive: true });

    // Convertir a buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Nombre único
    const timestamp = Date.now();
    const safeName = file.name.replace(/[^a-zA-Z0-9.]/g, '_');
    const filename = `${timestamp}-${safeName}`;
    const filepath = path.join(uploadsDir, filename);

    // Guardar archivo
    await writeFile(filepath, buffer);

    const imageUrl = `/uploads/${filename}`;
    
    return NextResponse.json({
      success: true,
      imageUrl,
      filename
    });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { success: false, error: 'Server error' },
      { status: 500 }
    );
  }
}