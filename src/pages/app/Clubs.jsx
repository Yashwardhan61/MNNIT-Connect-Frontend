import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { clubs } from '@/lib/data'
import { X, Users } from 'lucide-react'

export default function Clubs() {
  const [selectedClub, setSelectedClub] = useState(null)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Clubs</h1>
        <p className="text-muted-foreground mt-2">Explore campus clubs and join your interests</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clubs.map((club) => (
          <Card 
            key={club.id} 
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedClub(club)}
          >
            {club.imageUrl && (
              <img
                src={club.imageUrl}
                alt={club.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            )}
            <CardHeader>
              <CardTitle>{club.name}</CardTitle>
              <CardDescription>{club.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  {club.members} members
                </Badge>
                <button className="text-sm text-primary hover:underline font-medium">
                  View Info
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Club Info Modal */}
      {selectedClub && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-screen overflow-y-auto">
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
              <div className="space-y-2">
                <CardTitle className="text-2xl">{selectedClub.name}</CardTitle>
                <CardDescription>{selectedClub.description}</CardDescription>
              </div>
              <button
                onClick={() => setSelectedClub(null)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </CardHeader>

            {selectedClub.imageUrl && (
              <div className="px-6">
                <img
                  src={selectedClub.imageUrl}
                  alt={selectedClub.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            )}

            <CardContent className="space-y-6 pt-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Total Members</p>
                  <p className="text-2xl font-bold">{selectedClub.members}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <Badge>Active</Badge>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">About this Club</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedClub.info}
                </p>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold text-lg mb-2">Activities</h3>
                <ul className="space-y-2">
                  {selectedClub.name === 'Application Club' && (
                    <>
                      <li className="text-sm text-muted-foreground">• Weekly project collaboration</li>
                      <li className="text-sm text-muted-foreground">• App development workshops</li>
                      <li className="text-sm text-muted-foreground">• Hackathon participation</li>
                    </>
                  )}
                  {selectedClub.name === 'Computer Coding Club' && (
                    <>
                      <li className="text-sm text-muted-foreground">• Competitive programming contests</li>
                      <li className="text-sm text-muted-foreground">• Algorithm learning sessions</li>
                      <li className="text-sm text-muted-foreground">• Code review meetings</li>
                    </>
                  )}
                  {selectedClub.name === 'Dramatic Society' && (
                    <>
                      <li className="text-sm text-muted-foreground">• Theatre productions</li>
                      <li className="text-sm text-muted-foreground">• Acting workshops</li>
                      <li className="text-sm text-muted-foreground">• Drama nights and performances</li>
                    </>
                  )}
                  {selectedClub.name === 'Media Club' && (
                    <>
                      <li className="text-sm text-muted-foreground">• Photography expeditions</li>
                      <li className="text-sm text-muted-foreground">• Video production</li>
                      <li className="text-sm text-muted-foreground">• Content creation workshops</li>
                    </>
                  )}
                  {selectedClub.name === 'Quiz Club' && (
                    <>
                      <li className="text-sm text-muted-foreground">• Weekly quiz competitions</li>
                      <li className="text-sm text-muted-foreground">• Knowledge building sessions</li>
                      <li className="text-sm text-muted-foreground">• National quiz participations</li>
                    </>
                  )}
                  {selectedClub.name === 'Literary Club' && (
                    <>
                      <li className="text-sm text-muted-foreground">• Book club meetings</li>
                      <li className="text-sm text-muted-foreground">• Poetry recitations</li>
                      <li className="text-sm text-muted-foreground">• Writing workshops</li>
                    </>
                  )}
                  {selectedClub.name === 'Dance Club' && (
                    <>
                      <li className="text-sm text-muted-foreground">• Dance classes and training</li>
                      <li className="text-sm text-muted-foreground">• Performance events</li>
                      <li className="text-sm text-muted-foreground">• Inter-college competitions</li>
                    </>
                  )}
                  {selectedClub.name === 'Green Club' && (
                    <>
                      <li className="text-sm text-muted-foreground">• Tree planting drives</li>
                      <li className="text-sm text-muted-foreground">• Environmental awareness</li>
                      <li className="text-sm text-muted-foreground">• Sustainability initiatives</li>
                    </>
                  )}
                  {selectedClub.name === 'Robotic Club' && (
                    <>
                      <li className="text-sm text-muted-foreground">• Robot building and programming</li>
                      <li className="text-sm text-muted-foreground">• Robotics competitions</li>
                      <li className="text-sm text-muted-foreground">• Innovation challenges</li>
                    </>
                  )}
                  {selectedClub.name === 'Athletic Club' && (
                    <>
                      <li className="text-sm text-muted-foreground">• Sports training sessions</li>
                      <li className="text-sm text-muted-foreground">• Inter-college tournaments</li>
                      <li className="text-sm text-muted-foreground">• Fitness programs</li>
                    </>
                  )}
                  {selectedClub.name === 'Lifting Club' && (
                    <>
                      <li className="text-sm text-muted-foreground">• Strength training programs</li>
                      <li className="text-sm text-muted-foreground">• Weightlifting competitions</li>
                      <li className="text-sm text-muted-foreground">• Expert coaching sessions</li>
                    </>
                  )}
                </ul>
              </div>

              <div className="flex gap-2 pt-4 border-t">
                <Button className="flex-1">Join Club</Button>
                <Button variant="outline" className="flex-1" onClick={() => setSelectedClub(null)}>
                  Close
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
