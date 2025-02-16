"use client"

import { Fragment, useRef } from "react"
import Head from "next/head"
import Link from "next/link"

import employeeData from "../data/employees"
import { useRevealInit } from "../hooks/use-reveal-init"

import { Column, LandingContainer, LandingHeader, LandingSection, List, ListItem, ResetButton, Section, Slides, H3, TitleHeader, TitleSection, TwoColumns, H4 } from "./components.styles"

declare global {
  interface Window {
    Reveal: any
  }
}

export default function Page() {
  const revealRef = useRef<HTMLDivElement>(null)
  const isRevealLoaded = useRevealInit(revealRef)

  return (
    <>
      <Head>
        <title>Employee Information</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <link rel="stylesheet" href="./reveal.js/reveal.css" />
      <link rel="stylesheet" href="./reveal.js/black.css" />

      <div className="reveal" ref={revealRef}>
        <Slides className="slides">
          <LandingSection>
            <LandingContainer>
              <LandingHeader>Wins and Development Goals</LandingHeader>
            </LandingContainer>
          </LandingSection>
          {isRevealLoaded && (
            <Fragment>
              {employeeData.map((employee, index) => (
                <Section key={index}>
                  <TitleSection>
                    <TitleHeader>{employee.name}</TitleHeader>
                  </TitleSection>

                  <Section>
                    <H3>Personality</H3>
                    <List>
                      {employee.personality.map((trait, i) => (
                        <ListItem key={i}>{trait}</ListItem>
                      ))}
                    </List>
                  </Section>

                  <Section>
                    <H3>Strengths and Weaknesses</H3>
                    <TwoColumns>
                      <Column>
                        <H4><u>Strengths</u></H4>
                        <List>
                          {employee.strengths.map((strength, i) => (
                            <ListItem key={i}>{strength}</ListItem>
                          ))}
                        </List>
                      </Column>
                      <Column>
                        <H4><u>Weaknesses</u></H4>
                        <List>
                          {employee.weaknesses.map((weakness, i) => (
                            <ListItem key={i}>{weakness}</ListItem>
                          ))}
                        </List>
                      </Column>
                    </TwoColumns>
                  </Section>

                  <Section>
                    <H3>Development Goals</H3>
                    <List>
                      {employee.devGoals.map((goal, i) => (
                        <ListItem key={i}>{goal}</ListItem>
                      ))}
                    </List>
                  </Section>

                  <Section>
                    <H3>Current Struggles</H3>
                    <List>
                      {employee.challenges.map((challenge, i) => (
                        <ListItem key={i}>{challenge}</ListItem>
                      ))}
                    </List>
                  </Section>
                </Section>
              ))}
            </Fragment>
          )}

          <LandingSection>
            <LandingContainer>
              <LandingHeader>Thank you!</LandingHeader>
            </LandingContainer>
          </LandingSection>
        </Slides>
      </div>

      {!isRevealLoaded && (
        <Link href="/">
          <ResetButton>
            Reset
          </ResetButton>
        </Link>
      )}
    </>
  )
}

