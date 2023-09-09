'use client'
import NavBar from "@components/NavBar"
import Hero from "@components/Hero"
import Searchbar from "@components/Searchbar"
import ExercicesList from "@components/ExercicesList"

import { fetchExercises } from "@utils"
import {HomeProps} from '@types'
import { Text } from '@chakra-ui/react'

export default async function Home({searchParams}: HomeProps) {
  
  const allExercises = await fetchExercises({
    difficulty: searchParams.difficulty || "",
    muscle: searchParams.muscle || ""
  })
  
  const isDataEmpty = !Array.isArray(allExercises) || allExercises.length < 1 || !allExercises
  return (
   <>
    <NavBar/>
    <Hero/>
    <Searchbar/>
    <ExercicesList isDataEmpty={isDataEmpty} allExercises={allExercises}/>
   </>
  )
}
