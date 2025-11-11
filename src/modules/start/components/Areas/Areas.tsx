"use client";
import { Typography, Stack, Box, TextField, MenuItem, Chip } from "@mui/material";
import { useTheme } from "@/theme/ThemeProvider";
import CardWithImage from "@/components/CardWithImage";
import { useState, useMemo, ChangeEvent } from "react";
import { schoolData } from "@/modules/start/components/Areas/Data/SchoolData";
import { provinces, cantonesByProvince } from "@/modules/start/components/Areas/Data/ProvinceData";

const normalize = (s: string) =>
  (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export default function Areas() {
  const { theme } = useTheme();
  const [selectedProvince, setSelectedProvince] = useState<string>("");
  const [selectedCanton, setSelectedCanton] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const availableCantones = useMemo(
    () => (selectedProvince ? cantonesByProvince[selectedProvince] || [] : []),
    [selectedProvince]
  );

  const filteredSchools = useMemo(() => {
    const q = normalize(searchTerm);
    return schoolData.filter((school) => {
      const matchesProvince = !selectedProvince || school.province === selectedProvince;
      const matchesCanton = !selectedCanton || school.canton === selectedCanton;
      const hayBusqueda =
        !q ||
        normalize(school.schoolName).includes(q) ||
        normalize(school.title).includes(q) ||
        normalize(school.description).includes(q);
      return matchesProvince && matchesCanton && hayBusqueda;
    });
  }, [selectedProvince, selectedCanton, searchTerm]);

  const handleProvinceChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedProvince(event.target.value);
    setSelectedCanton("");
  };
  const handleCantonChange = (event: ChangeEvent<HTMLInputElement>) =>
    setSelectedCanton(event.target.value);
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(event.target.value);

  const clearFilters = () => {
    setSelectedProvince("");
    setSelectedCanton("");
    setSearchTerm("");
  };

  return (
    <Stack pt={6} pb={10} alignItems="center" sx={{ position: "relative" }}>
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          right: { xs: "-120px", md: "-160px" },
          top: { xs: "18%", md: "10%" },
          width: { xs: 420, md: 600, lg: 720 },
          height: { xs: 420, md: 600, lg: 720 },
          backgroundColor: theme.secondary,
          maskImage: 'url("/Vector-1.svg")',
          WebkitMaskImage: 'url("/Vector-1.svg")',
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskPosition: "center",
          WebkitMaskPosition: "center",
          opacity: 2,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Box
        width="100%"
        maxWidth="1200px"
        px={{ xs: 2, md: 0 }}
        sx={{ position: "relative", zIndex: 1 }}
      >
        <Box width="100%" textAlign="center" mb={3}>
          <Typography
            variant="h3"
            fontWeight="bold"
            color={theme.primary}
            sx={{
              fontFamily: "'Josefin Sans', sans-serif",
              fontSize: { xs: "2rem", md: "3rem" },
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            ESCUELAS
          </Typography>
          <Box
            sx={{
              width: 100,
              height: 4,
              backgroundColor: theme.secondary,
              m: "10px auto 0",
              borderRadius: "2px",
            }}
          />
        </Box>

        <Stack spacing={3} width="100%" maxWidth="800px" mx="auto" alignItems="center" mt={2}>
          <Typography
            variant="h6"
            color={theme.primary}
            fontWeight="bold"
            sx={{ fontFamily: "'Josefin Sans', sans-serif" }}
          >
            Filtros de Búsqueda
          </Typography>

          <TextField
            fullWidth
            label="Buscar escuela o zona"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            sx={{ maxWidth: 500, "& .MuiOutlinedInput-root": { borderRadius: 3 } }}
          />

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
              sx={{ minWidth: 200, "& .MuiOutlinedInput-root": { borderRadius: 3 } }}
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
              sx={{ minWidth: 200, "& .MuiOutlinedInput-root": { borderRadius: 3 } }}
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

          {(selectedProvince || selectedCanton || searchTerm) && (
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              flexWrap="wrap"
              justifyContent="center"
            >
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

          <Typography
            variant="body1"
            color={theme.text2}
            sx={{ fontFamily: "'Josefin Sans', sans-serif" }}
          >
            {filteredSchools.length} {filteredSchools.length === 1 ? "resultado" : "resultados"} encontrados
          </Typography>
        </Stack>

        <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={4} mt={6} sx={{ width: "100%" }}>
          {filteredSchools.length > 0 ? (
            filteredSchools.map((school) => (
              <Box key={school.id} sx={{ width: { xs: "100%", md: "48%" }, maxWidth: 520, minWidth: 300 }}>
                <CardWithImage
                  title={school.title}
                  image={school.image}
                  href={school.href}
                  backgroundImage="/assets/images/card-bg.png"
                  tintBackgroundWithThemeSecondary
                  backgroundSize="cover"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                />
              </Box>
            ))
          ) : (
            <Typography variant="h6" color={theme.text2} textAlign="center" mt={4}>
              No se encontraron resultados para los filtros seleccionados
            </Typography>
          )}
        </Stack>
      </Box>
    </Stack>
  );
}