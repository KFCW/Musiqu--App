"use client"
import { Grid, Card, CardBody, Text, Alert, AlertIcon, Flex  } from "@chakra-ui/react"
import { ExerciceProps, ExercicesProps } from "@types"
import Image from "next/image"

const ExercicesList = ({isDataEmpty, allExercises}: ExercicesProps) => {
  
  
    const renderDifficulty = (param: string) => {
        switch(param) {
            case 'beginner':
                return <Image src="/beginner.png" alt="beginner" width="80" height="25"/>
            case 'intermediate':
                return <Image src="/intermediate.png" alt="intermediate" width="80" height="25"/>
            case 'expert':
                return <Image src="/expert.png" alt="expert" width="80" height="25"/>
            default:
                return;
        }
    }
  
    return (
    <>
        {
            !isDataEmpty ? (
                <Grid
                    templateColumns={['repeat(1,1fr)','repeat(1,1fr)','repeat(1,1fr)','repeat(3,1fr)']}
                    gap="6"
                    p="2rem"
                >
                    {
                        allExercises.map((exercice : ExerciceProps) =>(
                            <Card>
                                <CardBody>
                                    <Flex
                                        alignItems="center"
                                        justifyContent="space-between"
                                    >
                                        <Text as="b">{exercice.name}</Text>
                                        <Flex>
                                            {
                                                renderDifficulty(exercice.difficulty)
                                            }
                                        </Flex>
                                    </Flex>
                                    <Flex mt=".5rem">
                                        <Text as="b">Type</Text>
                                        <Text as="b">&nbsp;: {exercice.type}</Text>
                                    </Flex>
                                    <Flex mt=".5rem">
                                        <Text as="b">Equipment</Text>
                                        <Text as="b">&nbsp;: {exercice.equipment}</Text>
                                    </Flex>
                                    <Text mt=".5rem">
                                         <Text as="b">Instructions</Text> :
                                         {exercice.instructions} 
                                    </Text>
                                </CardBody>
                            </Card>
                        ))
                    }
                </Grid>
            ):(
                <Flex m="2rem">
                    <Alert status="warning" variant="left-accent">
                        <AlertIcon/>
                        Oops, no result.
                    </Alert>
                </Flex>
            )
        }
    </>
  )
}

export default ExercicesList