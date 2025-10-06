import { Typography, Stack, Box, TextField, MenuItem, Chip } from "@mui/material";
import { useTheme } from "@/theme/ThemeProvider";
import CardWithImage from "@/components/CardWithImage";
import Image from "next/image";
import { useState, useMemo, ChangeEvent } from "react";

// Importaciones desde los archivos separados
import { School } from "@/modules/start/components/Areas/Filtro/Filtros";
import { schoolData } from "@/modules/start/components/Areas/Data/SchoolData";
import { provinces, cantonesByProvince } from "@/modules/start/components/Areas/Data/ProvinceData";

export default function Areas() {
  const { theme, isSmall } = useTheme();
  const [selectedProvince, setSelectedProvince] = useState<string>("");
  const [selectedCanton, setSelectedCanton] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Filtrar escuelas basado en los filtros
  const filteredSchools = useMemo(() => {
    return schoolData.filter(school => {
      const matchesProvince = !selectedProvince || school.province === selectedProvince;
      const matchesCanton = !selectedCanton || school.canton === selectedCanton;
      const matchesSearch = !searchTerm ||
        school.schoolName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        school.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        school.description.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesProvince && matchesCanton && matchesSearch;
    });
  }, [selectedProvince, selectedCanton, searchTerm]);

  // Resetear cantón cuando cambia la provincia
  const handleProvinceChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedProvince(event.target.value);
    setSelectedCanton("");
  };

  const handleCantonChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedCanton(event.target.value);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Limpiar todos los filtros
  const clearFilters = () => {
    setSelectedProvince("");
    setSelectedCanton("");
    setSearchTerm("");
  };

  // Cantones disponibles basados en la provincia seleccionada
  const availableCantones = selectedProvince ? cantonesByProvince[selectedProvince] || [] : [];

  return (
    <Stack bgcolor={theme.primary} pt={4} alignItems="center">
      <Stack
        bgcolor="white"
        my={10}
        alignItems="center"
        position="relative"
        p={4}
        sx={{
          borderRadius: 5,
          boxShadow: 6,
          width: {
            xs: "95%",
            sm: "90%",
            md: "75%",
          },
          maxWidth: "1200px",
        }}
      >
        {/* ... (el resto del código JSX permanece igual) */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: 400,
            borderRadius: 5,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              overflow: "hidden",
              borderRadius: 5,
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                position: "relative",
                transition: "transform 0.5s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Image
                src="/assets/images/zonesHero.jpg"
                alt="Grupo"
                fill
                style={{
                  objectFit: "cover",
                  borderRadius: 20,
                }}
              />
            </Box>
          </Box>

          <Image
            src="/assets/vectors/flag.svg"
            alt="Bandera"
            width={120}
            height={120}
            style={{
              position: "absolute",
              top: -80,
              right: -100,
            }}
          />
          <Image
            src="/assets/vectors/pencil.svg"
            alt="Lápiz"
            width={100}
            height={100}
            style={{
              position: "absolute",
              bottom: -20,
              left: -20,
            }}
          />
          <Typography
            variant="h4"
            color={"white"}
            textAlign="center"
            bgcolor={theme.secondary}
            py={1}
            px={8}
            borderRadius={6}
            border="8px solid #fff"
            sx={{
              position: "absolute",
              bottom: -40,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            Lugares Mapeados
          </Typography>
        </Box>

        <Box mt={10} width={"90%"} justifyItems={"center"}>
          <Typography variant={isSmall ? "body1" : "h6"} textAlign={"center"}>
            El resultado es este Atlas digital, que muestra una colección de
            mapas construidos por las infancias, en los que se señalan los
            lugares que consideran relevantes en su día a día. Estos espacios
            fueron clasificados en distintas categorías: lugares públicos,
            barrios, espacios privados, espacios naturales, instituciones y
            espacios comerciales. Además, todos los datos recopilados son
            abiertos y están disponibles para su descarga, fomentando el uso y
            análisis colectivo de esta información por parte de diversos actores
            sociales, académicos e institucionales.
          </Typography>
          <Box
            width={"20%"}
            height={5}
            borderRadius={10}
            mt={5}
            bgcolor={theme.secondary}
          />
        </Box>

        {/* Filtros */}
        <Stack
          spacing={3}
          width="100%"
          maxWidth="800px"
          mt={6}
          alignItems="center"
        >
          <Typography variant="h5" color={theme.primary} fontWeight="bold">
            Filtros de Búsqueda
          </Typography>

          {/* Buscador */}
          <TextField
            fullWidth
            label="Buscar escuela o zona"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            sx={{
              maxWidth: "500px",
              '& .MuiOutlinedInput-root': {
                borderRadius: 3,
              }
            }}
          />

          {/* Filtros de provincia y cantón */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            width="100%"
            justifyContent="center"
            alignItems={{ xs: "center", sm: "flex-start" }}
          >
            <TextField
              select
              label="Provincia"
              value={selectedProvince}
              onChange={handleProvinceChange}
              sx={{
                minWidth: 200,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 3,
                }
              }}
            >
              <MenuItem value="">
                <em>Todas las provincias</em>
              </MenuItem>
              {provinces.map((province) => (
                <MenuItem key={province} value={province}>
                  {province}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              select
              label="Cantón"
              value={selectedCanton}
              onChange={handleCantonChange}
              disabled={!selectedProvince}
              sx={{
                minWidth: 200,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 3,
                }
              }}
            >
              <MenuItem value="">
                <em>Todos los cantones</em>
              </MenuItem>
              {availableCantones.map((canton: string) => (
                <MenuItem key={canton} value={canton}>
                  {canton}
                </MenuItem>
              ))}
            </TextField>
          </Stack>

          {/* Chips de filtros activos */}
          {(selectedProvince || selectedCanton || searchTerm) && (
            <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" justifyContent="center">
              <Typography variant="body2" color={theme.text2}>
                Filtros activos:
              </Typography>
              {selectedProvince && (
                <Chip
                  label={`Provincia: ${selectedProvince}`}
                  onDelete={() => setSelectedProvince("")}
                  color="primary"
                  size="small"
                />
              )}
              {selectedCanton && (
                <Chip
                  label={`Cantón: ${selectedCanton}`}
                  onDelete={() => setSelectedCanton("")}
                  color="secondary"
                  size="small"
                />
              )}
              {searchTerm && (
                <Chip
                  label={`Búsqueda: ${searchTerm}`}
                  onDelete={() => setSearchTerm("")}
                  variant="outlined"
                  size="small"
                />
              )}
              <Chip
                label="Limpiar todo"
                onClick={clearFilters}
                variant="outlined"
                color="error"
                size="small"
                clickable
              />
            </Stack>
          )}

          {/* Contador de resultados */}
          <Typography variant="body1" color={theme.text2}>
            {filteredSchools.length} {filteredSchools.length === 1 ? 'resultado' : 'resultados'} encontrados
          </Typography>
        </Stack>

        {/* Cards filtradas - MODIFICADO: Stack horizontal con wrap */}
        <Stack
          direction="row"
          spacing={4}
          justifyContent="center"
          alignItems="flex-start"
          flexWrap="wrap"
          mb={6}
          mt={6}
          borderRadius={6}
          sx={{
            width: "100%",
            maxWidth: "1200px",
            gap: 3,
          }}
        >
          {filteredSchools.length > 0 ? (
            filteredSchools.map((school) => (
              <Box
                key={school.id}
                sx={{
                  width: {
                    xs: "100%",        // En móvil: una columna
                    sm: "48%",         // En tablet: 2 columnas  
                    md: "45%",         // En desktop: 2 columnas
                    lg: "45%",         // En pantallas grandes: 3 columnas
                  },
                  maxWidth: "500px",
                  minWidth: "300px",   // Ancho mínimo para mantener buena legibilidad
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 4,
                  }
                }}
              >
                <CardWithImage
                  title={school.title}
                  subheader={school.subheader}
                  image={school.image}
                  description={school.description}
                  href={school.href}
                />
              </Box>
            ))
          ) : (
            <Typography variant="h6" color={theme.text2} textAlign="center" mt={4}>
              No se encontraron resultados para los filtros seleccionados
            </Typography>
          )}
        </Stack>

        {/* Brújula decorativa */}
        <Image
          src="/assets/vectors/compass.svg"
          alt="Brújula"
          width={140}
          height={140}
          style={{
            position: "absolute",
            bottom: -50,
            right: -110,
            transform: "rotate(30deg)",
          }}
        />

        {/* Bicho lupa - NUEVA IMAGEN AGREGADA */}
        <Image
          src="/bicho-lupa.png"
          alt="Bicho lupa"
          width={120}
          height={120}
          style={{
            position: "absolute",
            bottom: -40,
            left: -60,
          }}
        />
      </Stack>
    </Stack>
  );
}
