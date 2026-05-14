"use client"

import { useState } from "react"
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  GraduationCap,
  Briefcase,
  BookOpen,
  Trophy,
  FileText,
  Microscope,
  ArrowUpRight,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("about")

  const publications = [
    {
      title:
        "Laser-Induced Forward Transfer of ZnO Nanostructures on PET Sheets",
      journal: "Microelectronic Engineering",
      year: "2021",
      link: "#",
    },
    {
      title:
        "Fabrication of NiTi Based Strain Gauge using μ-3D Printing",
      journal: "Manufacturing Letters",
      year: "2022",
      link: "#",
    },
    {
      title:
        "Micro-3D Printing of NiTi Alloy using Laser Decal Transfer",
      journal: "Materials & Manufacturing Processes",
      year: "2022",
      link: "#",
    },
  ]

  const researchAreas = [
    "Laser μ-3D Printing",
    "Shape Memory Alloys",
    "Additive Manufacturing",
    "WAAM",
    "Triboelectric Nanogenerator",
    "Laser Surface Engineering",
    "Numerical Modelling",
    "Smart Materials",
  ]

  const experiences = [
    {
      role: "Research Associate",
      place: "IIT Indore",
      duration: "2024 - Present",
      description:
        "WAAM of NiTi-Cu Shape Memory Alloy for temperature dependent clamping systems.",
    },
    {
      role: "Research Associate",
      place: "IIT Indore",
      duration: "2023 - 2024",
      description:
        "Laser surface texturing for triboelectric nanogenerator applications.",
    },
    {
      role: "Senior Research Fellow",
      place: "IIT Indore",
      duration: "2022 - 2023",
      description:
        "Research in laser micro 3D printing and MEMS fabrication.",
    },
  ]

  return (
    <main className="min-h-screen bg-[#0b1120] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#7c3aed22,transparent_30%),radial-gradient(circle_at_bottom_left,#f9731622,transparent_30%)]" />

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-[300px_1fr] gap-14 items-center">

            {/* IMAGE */}
            <div className="flex justify-center">
              <Avatar className="w-64 h-64 border-4 border-white/10 shadow-2xl">
                <AvatarImage src="/pfp.jpg" />
                <AvatarFallback className="text-5xl bg-orange-500">
                  AS
                </AvatarFallback>
              </Avatar>
            </div>

            {/* CONTENT */}
            <div>
              <Badge className="mb-5 bg-orange-500 hover:bg-orange-600 text-white px-4 py-1">
                Research Associate • IIT Indore
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                Dr. Anshu Sahu
              </h1>

              <p className="text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
                Specializing in advanced manufacturing technologies,
                laser micro-3D printing, shape memory alloys,
                and smart material systems for MEMS applications.
              </p>

              {/* CONTACT */}
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center gap-2 bg-white/5 px-4 py-3 rounded-xl border border-white/10">
                  <Mail className="w-4 h-4 text-orange-400" />
                  <span className="text-sm">
                    anshusahunov@gmail.com
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-white/5 px-4 py-3 rounded-xl border border-white/10">
                  <Phone className="w-4 h-4 text-orange-400" />
                  <span className="text-sm">
                    +91 9450931991
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-white/5 px-4 py-3 rounded-xl border border-white/10">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span className="text-sm">
                    IIT Indore, India
                  </span>
                </div>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  ["15+", "Publications"],
                  ["5+", "Research Projects"],
                  ["3", "Awards"],
                  ["4+", "Years Experience"],
                ].map(([num, label]) => (
                  <Card
                    key={label}
                    className="bg-white/5 border-white/10 backdrop-blur-xl"
                  >
                    <CardContent className="p-5">
                      <div className="text-3xl font-bold text-orange-400">
                        {num}
                      </div>
                      <div className="text-sm text-gray-400 mt-1">
                        {label}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-14">

        <Tabs
          defaultValue="about"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="bg-white/5 border border-white/10 mb-10 flex flex-wrap h-auto p-2 rounded-2xl">
            {[
              "about",
              "research",
              "experience",
              "publications",
              "awards",
            ].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="capitalize rounded-xl px-5 py-3 data-[state=active]:bg-orange-500"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* ABOUT */}
          <TabsContent value="about">
            <div className="grid lg:grid-cols-3 gap-8">

              <Card className="lg:col-span-2 bg-white/5 border-white/10">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6">
                    About Me
                  </h2>

                  <p className="text-gray-300 leading-8 text-lg">
                    I am a researcher focused on additive manufacturing,
                    laser-assisted fabrication, shape memory alloys,
                    and smart materials. My work bridges advanced
                    manufacturing systems with practical MEMS and
                    energy-harvesting applications.
                  </p>

                  <p className="text-gray-400 leading-8 mt-6">
                    My research contributions include micro-scale
                    laser 3D printing, triboelectric nanogenerators,
                    and WAAM-based NiTi smart actuator systems.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">
                    Expertise
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {researchAreas.map((item) => (
                      <Badge
                        key={item}
                        className="bg-orange-500/10 text-orange-300 border border-orange-500/20 px-3 py-2"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

            </div>
          </TabsContent>

          {/* EXPERIENCE */}
          <TabsContent value="experience">
            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="relative pl-10 border-l border-white/10"
                >
                  <div className="absolute left-[-7px] top-2 w-3 h-3 rounded-full bg-orange-500" />

                  <Card className="bg-white/5 border-white/10">
                    <CardContent className="p-7">
                      <div className="flex flex-wrap justify-between gap-4 mb-3">
                        <div>
                          <h3 className="text-2xl font-semibold">
                            {exp.role}
                          </h3>

                          <p className="text-orange-400">
                            {exp.place}
                          </p>
                        </div>

                        <Badge className="bg-white/10">
                          {exp.duration}
                        </Badge>
                      </div>

                      <p className="text-gray-400 leading-7">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* PUBLICATIONS */}
          <TabsContent value="publications">
            <div className="grid gap-6">
              {publications.map((pub, idx) => (
                <Card
                  key={idx}
                  className="bg-white/5 border-white/10 hover:border-orange-500/40 transition-all"
                >
                  <CardContent className="p-7">
                    <div className="flex justify-between gap-6 flex-wrap">
                      <div className="max-w-4xl">
                        <div className="flex items-center gap-2 text-orange-400 mb-3">
                          <FileText className="w-4 h-4" />
                          <span>{pub.journal}</span>
                        </div>

                        <h3 className="text-xl font-semibold leading-8">
                          {pub.title}
                        </h3>

                        <p className="text-gray-400 mt-3">
                          Published in {pub.year}
                        </p>
                      </div>

                      <Button
                        variant="outline"
                        className="border-orange-500/30 bg-transparent hover:bg-orange-500 hover:text-white"
                      >
                        View Paper
                        <ArrowUpRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* RESEARCH */}
          <TabsContent value="research">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchAreas.map((area, idx) => (
                <Card
                  key={idx}
                  className="bg-white/5 border-white/10 hover:border-orange-500/40 transition-all hover:-translate-y-1"
                >
                  <CardContent className="p-8">
                    <Microscope className="w-10 h-10 text-orange-400 mb-5" />

                    <h3 className="text-xl font-semibold mb-3">
                      {area}
                    </h3>

                    <p className="text-gray-400 text-sm leading-7">
                      Advanced research and development in {area.toLowerCase()}
                      applications for manufacturing and smart systems.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* AWARDS */}
          <TabsContent value="awards">
            <div className="grid gap-5">
              {[
                "Top 75 Innovation at IINventive 2022 - IIT Delhi",
                "Best Paper Award - AIMTDR 2021",
                "DST-AMT Government Fellowship",
                "MHRD Fellowship - NIT Warangal",
              ].map((award, idx) => (
                <Card
                  key={idx}
                  className="bg-white/5 border-white/10"
                >
                  <CardContent className="p-6 flex items-center gap-4">
                    <Trophy className="text-yellow-400 w-7 h-7" />
                    <p className="text-lg text-gray-300">
                      {award}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

        </Tabs>
      </section>
    </main>
  )
}
