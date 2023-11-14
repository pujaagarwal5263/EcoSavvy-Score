import React from 'react'
import { Box, Heading, Text, Image } from "@chakra-ui/react";
const countryWiseEmissions = require("../images/Co2.gif")
const reducedEmissions = require("../images/co2-2.jpeg")
const dailyEmissions = require("../images/co2-3.png")
const increment = require("../images/increment.png")

const Statistics = () => {
  return (
    <>
    <Box
      px={20}
      py={10}
      fontSize="large"
      backgroundColor="green.700"
      color="white"
    >
      {/* Welcome Section */}
      <Box  mb={8}>
        <Heading textAlign="center" as="h1" mb={2}>
          Some Alarming Statistics
        </Heading>
        <br/>
        <p style={{fontSize:"25px"}}>Some of the worldwide stats are listed below:</p>
        <br/>
        <ul style={{ listStyle: 'bullet', padding: 0 }}>
          <li>
            The global average carbon footprint is about 4 tons per person with the highest in the United States (16 tons).
          </li>
          <li>
            One-fourth of the earth’s species are likely to face extinction within the next 40 years if climate change continues to increase at the current rate.
          </li>
          <li>
            Reduction in greenhouse gas emissions can help prevent up to 3 million premature deaths yearly by the year 2100.
          </li>
          <li>
            If each of the 140 million homes in a city replaces its incandescent light bulb with an energy-efficient CFL lamp, it can save enough energy to power over 3 million homes in a year.
          </li>
        </ul>
      </Box>

      {/* What is Ecosavvy Section */}
      <Box mb={8} display={{ md: "flex" }} gap="10">
        <Box flex={{ base: 1, md: 1 }} mb={{ base: 6, md: 0 }}>
          <Heading as="h2" size="lg" mb={2} textAlign="center">
           How Carbon Emissions have increased in past 50 years
          </Heading>
          <Text>
            This is a graph showing how carbon emission have rapidly increasing
            in past years. The graph has been exponentially growing since the year 1960.
            Slight Downfall of the graph can be noticed in the year 2020.
            <br />
            This exponential growth of carbon emissions depicts the risk to humanuty
            possessed by harmful emission and its thousands of adverse effects.
            <br />
           
          </Text>
        </Box>
        <Box flex={{ base: 1, md: 1 }}>
          <Image
            src={increment}
            alt="Increment"
            maxW="100%"
            borderRadius={5}
          />
        </Box>
      </Box>
<br/>
      {/* Why Choose Ecosavvy Section */}
      <Box mb={8} display={{ md: "flex" }}>
        <Box flex={{ base: 1, md: 1 }} order={{ base: 2, md: 1 }}>
          <Image
            src={countryWiseEmissions}
            alt="countryWiseEmissions"
            maxW="100%"
            borderRadius={10}
          />
        </Box>
        <Box
          flex={{ base: 1, md: 1 }}
          order={{ base: 1, md: 2 }}
          ml={{ md: 4 }}
        >
          <Heading as="h2" size="lg" mb={2} textAlign="center">
           Country Wise Emission Statistics
          </Heading>
          <Text>
            We can see the country wise Emission stats in the graph alongside.
            It shows how Saudi Arabia  and Canada are one of the highest carbon emitters
            while countries with less area and population like Japan also fall under
            one of the worldwide highest emission's category.
            <br/>
            This is the statistics after the COVID had just gone over us. We, humans, as a
            responsible community should have taken some major steps after the COVID tragedy but 
            unfortunately we failed.
          </Text>
        </Box>
      </Box>

      <Box mb={8} display={{ md: "flex" }} gap="10">
        <Box flex={{ base: 1, md: 1 }} mb={{ base: 6, md: 0 }}>
          <Heading as="h2" size="lg" mb={2} textAlign="center">
          Reduced Co2 Emissions in 2020
          </Heading>
          <Text>
            This is a graph showing how carbon emission have suddenly reduced
            in 2020 due to COVID imposing worldwide lockdown.
            <br />
            This graph clearly depicts humans as source of carbon emission in the
            world. Countries like Spain, India, USA had a good downfall of carbon emission while
            China failed in this. Despite being one of the largest population, they could
            not reduce carbon emissions during COVID itself. India had a good performance in this 
            aspect being large county in terms of population and area.
            <br />
           
          </Text>
        </Box>
        <Box flex={{ base: 1, md: 1 }}>
          <Image
            src={reducedEmissions}
            alt="Increment"
            maxW="100%"
            borderRadius={5}
          />
        </Box>
      </Box>

      <Box mb={8} display={{ md: "flex" }}>
        <Box flex={{ base: 1, md: 1 }} order={{ base: 2, md: 1 }}>
          <Image
            src={dailyEmissions}
            alt="increment"
            maxW="100%"
            borderRadius={10}
          />
        </Box>
        <Box
          flex={{ base: 1, md: 1 }}
          order={{ base: 1, md: 2 }}
          ml={{ md: 4 }}
        >
          <Heading as="h2" size="lg" mb={2} textAlign="center">
           Daily Emission Analysis
          </Heading>
          <Text>
            Graph shows daily emission analysis since year 1970 to upcoming 2050
          </Text>
        </Box>
      </Box>
    </Box>
    <Box backgroundColor="white" color="green.700" py={4} textAlign="center" fontWeight="bold">
        Made with 💚 by CarbonTrack
      </Box>
      </>
  )
}

export default Statistics