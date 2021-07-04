import React from "react";
import StatsCard from "../components/StatsCard";
import { FaBitcoin } from "react-icons/fa";
import { GrDeliver } from "react-icons/gr";
import { FaShippingFast } from "react-icons/fa";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";

const StatsContainer = () => (
  <Box
    maxW="7xl"
    mx="auto"
    pt={5}
    px={{ base: 2, sm: 12, md: 17 }}
    marginTop="7rem"
  >
    <Text as="h1" textAlign="center" fontSize="4xl" py={10} fontWeight="bold">
      Nos comprometemos con el cliente, ofreciendole las mejores condiciones.
    </Text>

    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
      <StatsCard
        title="Pagos con Bitcoin"
        stat="Aceptados"
        icon={<FaBitcoin size="3em" />}
      />

      <StatsCard
        title="Te lo llevamos a tu casa"
        stat="Por pagos de más de 50€"
        icon={<GrDeliver size="3em" />}
      />

      <StatsCard
        title="Entregas Express"
        stat="24 horas"
        icon={<FaShippingFast size="3em" />}
      />
    </SimpleGrid>
  </Box>
);

export default StatsContainer;
