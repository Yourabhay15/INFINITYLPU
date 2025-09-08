'use client';

import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function RulesPage() {
  return (
    <>
      <header className="py-32 lg:py-40 bg-black text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-headline text-4xl md:text-6xl font-bold">Tournament <span className="text-accent">Rules</span></h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">Welcome to the ultimate battleground! Get ready to showcase your skills in this thrilling BGMI and Free Fire tournament.</p>
           <div className="mt-4 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-accent">Home</Link>
                <span className="mx-2">/</span>
                <span>Rules</span>
            </div>
        </div>
      </header>

      <section className="py-20 lg:py-28 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-background/50 border border-primary/20 rounded-2xl p-8">
            <div className="prose prose-invert max-w-none">
              <h3 className="font-headline text-2xl text-accent mb-6">BGMI & Free Fire Tournament Rules</h3>
              <p className="text-muted-foreground mb-6">
                Please read the rules carefully to ensure a smooth and fair competition.
              </p>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-0">
                  <AccordionTrigger>0. Important Notices</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li><strong>Organisers' Responsibility:</strong> Organisers reserve the right to make changes to the rules or tournament structure at any moment. It is the responsibility of the organisers to communicate any such changes promptly to all participants.</li>
                      <li><strong>Read Before Registering:</strong> All participants must read and understand the tournament rules before completing registration. By registering, you agree to abide by all rules and any changes made by the organisers.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-1">
                  <AccordionTrigger>1. Registration & Fees</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li><strong>Entry Fee:</strong> ₹69 per person.</li>
                      <li><strong>Team Format:</strong> This is a Squads Only tournament.</li>
                      <li><strong>Team Formation:</strong>
                        <ul className="mt-2 ml-6 space-y-2">
                          <li>You must register as a squad of four players.</li>
                          <li>If you register as a <span className="text-accent font-semibold">Solo, Duo, or Trio</span>, you will be automatically assigned to form a full squad with other registered players who are also looking for teammates. <span className="text-accent font-semibold">Efforts will be made to create balanced teams.</span>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>2. Communication & Updates</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-3"><strong>Mandatory WhatsApp Group:</strong> All registered participants must join the official tournament WhatsApp group. This group will be the primary source for:</p>
                    <ul className="space-y-2 text-muted-foreground ml-6">
                      <li>Match schedules and timings.</li>
                      <li>Room IDs and passwords.</li>
                      <li>Important announcements and rule clarifications.</li>
                      <li>Points table updates.</li>
                      <li>Any last-minute changes or emergencies.</li>
                    </ul>
                    <p className="text-muted-foreground mt-3">The link to the WhatsApp group will be provided upon successful registration.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>3. Tournament Format</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li><strong>Game Modes:</strong> Matches will be played in standard Battle Royale mode.</li>
                      <li><strong>Number of Matches/Rounds:</strong> (To be announced in the WhatsApp group based on participant count, e.g., 2-3 matches per stage.)</li>
                      <li><strong>Server:</strong> India server only.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>4. Scoring System</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-3">Points will be awarded based on a combination of placement and kills. The exact distribution will be:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <h5 className="font-semibold text-accent mb-3">Placement Points:</h5>
                        <ul className="space-y-2 text-muted-foreground text-sm">
                          <li>1st Place: 10 Points</li>
                          <li>2nd Place: 6 Points</li>
                          <li>3rd Place: 5 Points</li>
                          <li>4th Place: 4 Points</li>
                          <li>5th Place: 3 Points</li>
                          <li>6th Place: 2 Points</li>
                          <li>7th Place: 1 Point</li>
                          <li>8th Place and below: 0 Points</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-accent mb-3">Kill Points:</h5>
                        <p className="text-muted-foreground text-sm">1 Point per kill.</p>
                        
                        <h5 className="font-semibold text-accent mb-3 mt-4">Tie-Breaker:</h5>
                        <p className="text-muted-foreground text-sm">In case of a tie in total points, the following criteria will be used to determine the ranking:</p>
                        <ul className="space-y-1 text-muted-foreground text-sm ml-4">
                          <li>Total number of Chicken Dinners/Booyahs.</li>
                          <li>Total number of kills across all matches.</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>5. General Game Rules & Fair Play</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li><strong>Hacks/Cheats:</strong> Any form of hacking, cheating, or exploiting in-game glitches will result in immediate disqualification of the entire squad from the tournament, and a permanent ban from future events.</li>
                      <li><strong>Teaming/Collusion:</strong> Collaborating with other squads or engaging in any form of collusion to manipulate match outcomes is strictly forbidden and will lead to immediate disqualification.</li>
                      <li><strong>Abusive Behavior:</strong> Any player found using abusive language, racist remarks, or engaging in unsportsmanlike conduct towards other players or organizers will face penalties, including disqualification.</li>
                      <li><strong>Connectivity Issues:</strong> Participants are responsible for their own internet connection. The tournament organizers are not liable for disconnections, lag, or device issues. No match restarts will be provided due to individual player disconnections.</li>
                      <li><strong>Room ID/Password Sharing:</strong> Sharing Room IDs or passwords with non-participants is strictly prohibited.</li>
                      <li><strong>Spectating:</strong> Only official tournament staff are allowed to spectate.</li>
                      <li><strong>Organizers' Decision:</strong> All decisions made by the tournament organizers regarding rules, disputes, and final results are binding and final.</li>
                      <li><strong>No Duty Leaves:</strong> No duty leaves will be provided.</li>
                      <li><strong>Personal Equipment:</strong> Participants must bring their own cushions, fans, chargers, and other equipment.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>6. Prizes</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">Prizes for the top-performing squads will be announced soon in the WhatsApp group. Stay tuned!</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="text-center pt-6 border-t border-primary/20 mt-8">
                <p className="text-lg font-semibold text-accent">Good luck, and may the best squad win! 🏆</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}