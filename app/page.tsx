"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  User,
  FileText,
  Trophy,
  Users,
  Camera,
  Video,
  Plus,
  Eye,
  Download,
} from "lucide-react"

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("about")

  const personalInfo = {
    name: "Dr. Anshu Sahu",
    title: "Assistant Professor | Advanced Manufacturing & Mechatronics",
    description: "Specializing in Laser μ-3D Printing, Shape Memory Alloys, Robotics, and Advanced Manufacturing Technologies",
    email: "anshusahunov@gmail.com",
    phone: "+91-9450931991",
    location: "SRM University- AP, India",
    profileImage: "/pfp.jpg",
    dateOfBirth: "November 11, 1992",
    nationality: "Indian",
    languages: ["English", "Hindi"],
    maritalStatus: "Married",
  }

  const researchAreas = [
    "Additive Manufacturing",
    "Shape Memory Alloy",
    "Smart Actuators",
    "Laser Surface Processing",
    "Physical Vapour Deposition",
    "Laser Micro 3D Printing",
    "Numerical Modelling",
    "Laser Assisted Advanced Machining",
  ]

  const workGallery = {
    photos: [
      {
        id: 1,
        title: "Laser μ-3D Printing Process",
        description: "Mechanics of transfer",
        url: "/Schematic of LIFT.png",
        category: "Equipment",
      },
      {
        id: 2,
        title: "NiTi Shape Memory Alloy Samples",
        description: "Wire arc additive manufactured NiTi specimens",
        url: "/placeholder-ptqxr.png",
        category: "Materials",
      },
      {
        id: 3,
        title: "Microscopic Analysis",
        description: "SEM images of laser processed surfaces",
        url: "/sem-surface-analysis.png",
        category: "Analysis",
      },
      {
        id: 4,
        title: "Triboelectric Nanogenerator",
        description: "Energy harvesting device prototype",
        url: "/triboelectric-nanogenerator.png",
        category: "Innovation",
      },
    ],
    videos: [
      {
        id: 1,
        title: "Laser 3D Printing Process",
        description: "Time-lapse of micro-scale 3D printing process",
        thumbnail: "/laser-3d-printing.png",
        category: "Process",
      },
      {
        id: 2,
        title: "Shape Memory Alloy Demonstration",
        description: "Temperature-dependent shape recovery demonstration",
        thumbnail: "/shape-memory-alloy-demo.png",
        category: "Materials",
      },
    ],
  }

  const firstAuthorPublications = [
    {
      title:
        "Parametric investigation on Laser-Induced Forward Transfer of ZnO nanostructure on flexible PET sheet for optoelectronic application",
      journal: "Microelectronic Engineering",
      year: "2021",
      doi: "https://doi.org/10.1016/j.mee.2021.111569",
    },
    {
      title: "Investigation on fabrication of NiTi based strain gauge using laser decal transfer based μ-3D printing",
      journal: "Manufacturing Letters",
      year: "2022",
      doi: "https://doi.org/10.1016/j.mfglet.2022.03.001",
    },
    {
      title: "Parametric Investigations on Laser-Induced Forward Transfer Based Micro-3D Printing of NiTi Alloy",
      journal: "Materials and Manufacturing Processes",
      year: "2022",
      doi: "https://doi.org/10.1080/10426914.2022.2072877",
    },
    {
      title:
        "Investigation of Material Ejection in Laser Decal Transfer Based μ-3D Printing of ZnO ceramics with long Pulsed CO₂ laser",
      journal: "International Journal of Advanced Manufacturing Technology",
      year: "2024",
      doi: "https://doi.org/10.1007/s00170-024-14514-7",
    },
  ]

  const achievements = [
    "Top 75 innovation in IINventive 2022 at IIT Delhi for developed Micro 3D printer",
    "Top 125 innovation in IInventive 2024 at IIT Hyderabad for triboelectric based shoe for energy harvesting",
    "Best Paper Award for Laser-Induced Forward Transfer Based Micro-3D Printing of NiTi Alloy in AIMTDR conference 2021",
    "DST: AMT, Government of India fellowship (Nov 2019 - Aug 2021)",
    "MHRD, Govt. of India fellowship for M.Tech at NIT Warangal (2014-2016)",
  ]

  const education = [
    {
      degree: "Doctor of Philosophy",
      field: "Mechanical Engineering",
      institution: "Indian Institute of Technology, Indore",
      period: "Jan 2020 - Oct 2023",
      thesis:
        "Design & Development of Laser Decal Transfer Based μ-3D Printer for Printing Micro Scale structures for MEMS Application",
    },
    {
      degree: "Master of Technology",
      field: "Manufacturing Engineering",
      institution: "National Institute of Technology Warangal",
      period: "2017 - 2019",
      thesis: "Study on effect of Laser-Assisted Machining parameters on surface roughness",
    },
    {
      degree: "Bachelor of Technology",
      field: "Mechanical Engineering",
      institution: "Bundelkhand Institute of Engineering & Technology, Jhansi",
      period: "2012 - 2016",
      thesis: "Study of Wheel Loading Phenomenon in Surface Grinding Process",
    },
  ]

  const experience = [
    {
      position: "Assistant Professor",
      institution: "SRM University- AP",
      period: "Current",
      focus: "Advanced Manufacturing Technology and Research",
    },
    {
      position: "Research Associate",
      institution: "Indian Institute of Technology Indore",
      period: "Sep 2024 - Onwards",
      focus: "WAAM of NiTi-Cu based Shape Memory Alloy for temperature dependent clamps",
    },
    {
      position: "Research Associate",
      institution: "Indian Institute of Technology Indore",
      period: "Sep 2023 - Aug 2024",
      focus: "Laser surface texturing for triboelectric Nanogenerator",
    },
    {
      position: "Senior Research Fellow",
      institution: "Indian Institute of Technology Indore",
      period: "Oct 2022 - Sep 2023",
      focus: "Research in Laser μ-3D Printing",
    },
    {
      position: "Junior Research Fellow",
      institution: "Indian Institute of Technology Indore",
      period: "Jan 2020 - Oct 2022",
      focus: "Research in Laser μ-3D Printing",
    },
    {
      position: "Research Intern",
      institution: "Raja Ramanna Centre for Advanced Technology",
      period: "May 2018 - April 2019",
      focus: "Laser Assisted Machining",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative">
      {/* Tech Grid Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 255, 200, .1) 25%, rgba(0, 255, 200, .1) 26%, transparent 27%, transparent 74%, rgba(0, 255, 200, .1) 75%, rgba(0, 255, 200, .1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 200, .1) 25%, rgba(0, 255, 200, .1) 26%, transparent 27%, transparent 74%, rgba(0, 255, 200, .1) 75%, rgba(0, 255, 200, .1) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }}
      ></div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden border-b-4 border-cyan-500">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-green-500/10"></div>
        <div className="relative max-w-4xl mx-auto">
          <div className="group mb-8">
            <Avatar className="w-48 h-48 mx-auto border-4 border-cyan-500 shadow-2xl transition-transform duration-300 group-hover:scale-105 ring-2 ring-green-500/30">
              <AvatarImage src={personalInfo.profileImage || "/placeholder.svg"} alt={personalInfo.name} />
              <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-cyan-500 to-blue-600">AS</AvatarFallback>
            </Avatar>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-green-300 to-blue-300 bg-clip-text text-transparent font-mono tracking-wider">
            {personalInfo.name}
          </h1>
          <p className="text-xl md:text-2xl mb-6 opacity-90 font-medium text-cyan-300">{personalInfo.title}</p>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-80 leading-relaxed text-gray-300">{personalInfo.description}</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 bg-cyan-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-cyan-500/30 hover:border-cyan-500/60 transition">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span className="text-gray-200">{personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/30 hover:border-blue-500/60 transition">
              <Phone className="w-4 h-4 text-blue-400" />
              <span className="text-gray-200">{personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2 bg-green-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-green-500/30 hover:border-green-500/60 transition">
              <MapPin className="w-4 h-4 text-green-400" />
              <span className="text-gray-200">{personalInfo.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-4 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-9 mb-8 bg-slate-800/50 shadow-lg border border-cyan-500/30 backdrop-blur-sm">
            <TabsTrigger
              value="about"
              className="flex items-center gap-2 data-[state=active]:bg-cyan-500 data-[state=active]:text-slate-900 data-[state=active]:border-cyan-500 text-gray-300 hover:text-cyan-300"
            >
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">About</span>
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="flex items-center gap-2 data-[state=active]:bg-cyan-500 data-[state=active]:text-slate-900 data-[state=active]:border-cyan-500 text-gray-300 hover:text-cyan-300"
            >
              <GraduationCap className="w-4 h-4" />
              <span className="hidden sm:inline">Education</span>
            </TabsTrigger>
            <TabsTrigger
              value="experience"
              className="flex items-center gap-2 data-[state=active]:bg-cyan-500 data-[state=active]:text-slate-900 data-[state=active]:border-cyan-500 text-gray-300 hover:text-cyan-300"
            >
              <Briefcase className="w-4 h-4" />
              <span className="hidden sm:inline">Experience</span>
            </TabsTrigger>
            <TabsTrigger
              value="research"
              className="flex items-center gap-2 data-[state=active]:bg-cyan-500 data-[state=active]:text-slate-900 data-[state=active]:border-cyan-500 text-gray-300 hover:text-cyan-300"
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Research</span>
            </TabsTrigger>
            <TabsTrigger
              value="publications"
              className="flex items-center gap-2 data-[state=active]:bg-cyan-500 data-[state=active]:text-slate-900 data-[state=active]:border-cyan-500 text-gray-300 hover:text-cyan-300"
            >
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Publications</span>
            </TabsTrigger>
            <TabsTrigger
              value="gallery"
              className="flex items-center gap-2 data-[state=active]:bg-cyan-500 data-[state=active]:text-slate-900 data-[state=active]:border-cyan-500 text-gray-300 hover:text-cyan-300"
            >
              <Camera className="w-4 h-4" />
              <span className="hidden sm:inline">Gallery</span>
            </TabsTrigger>
            <TabsTrigger
              value="achievements"
              className="flex items-center gap-2 data-[state=active]:bg-cyan-500 data-[state=active]:text-slate-900 data-[state=active]:border-cyan-500 text-gray-300 hover:text-cyan-300"
            >
              <Trophy className="w-4 h-4" />
              <span className="hidden sm:inline">Awards</span>
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className="flex items-center gap-2 data-[state=active]:bg-cyan-500 data-[state=active]:text-slate-900 data-[state=active]:border-cyan-500 text-gray-300 hover:text-cyan-300"
            >
              <Award className="w-4 h-4" />
              <span className="hidden sm:inline">Skills</span>
            </TabsTrigger>
            <TabsTrigger
              value="contact"
              className="flex items-center gap-2 data-[state=active]:bg-cyan-500 data-[state=active]:text-slate-900 data-[state=active]:border-cyan-500 text-gray-300 hover:text-cyan-300"
            >
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Contact</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-cyan-500 bg-slate-800/50 border border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-cyan-300">
                  <User className="w-6 h-6 text-cyan-400" />
                  About Me
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-300">
                  I am a dedicated researcher and educator with extensive experience in additive manufacturing, laser processing
                  technologies, and shape memory alloys. Currently serving as an Assistant Professor at SRM University- AP, I lead
                  research initiatives and teach advanced manufacturing topics, specializing in developing innovative solutions for
                  micro-scale manufacturing and smart material applications.
                </p>
                <p className="leading-relaxed text-gray-400">
                  My research focuses on the intersection of advanced manufacturing techniques and smart materials,
                  particularly in the development of laser-based micro 3D printing systems and the characterization of
                  NiTi shape memory alloys. I have contributed significantly to the field through numerous publications,
                  patents, and innovative projects that have been recognized at national and international levels.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-lg border border-cyan-500/30">
                    <h4 className="font-semibold mb-4 text-cyan-300 text-lg">Personal Information</h4>
                    <div className="space-y-2 text-sm text-gray-300">
                      <p>
                        <strong className="text-cyan-400">Date of Birth:</strong> {personalInfo.dateOfBirth}
                      </p>
                      <p>
                        <strong className="text-cyan-400">Nationality:</strong> {personalInfo.nationality}
                      </p>
                      <p>
                        <strong className="text-cyan-400">Languages:</strong> {personalInfo.languages.join(", ")}
                      </p>
                      <p>
                        <strong className="text-cyan-400">Marital Status:</strong> {personalInfo.maritalStatus}
                      </p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-lg border border-blue-500/30">
                    <h4 className="font-semibold mb-4 text-blue-300 text-lg">Current Position</h4>
                    <div className="space-y-2 text-sm text-gray-300">
                      <p>
                        <strong className="text-blue-400">Position:</strong> Assistant Professor
                      </p>
                      <p>
                        <strong className="text-blue-400">Institution:</strong> SRM University- AP
                      </p>
                      <p>
                        <strong className="text-blue-400">Focus:</strong> Advanced Manufacturing Technology
                      </p>
                      <p>
                        <strong className="text-blue-400">Specialization:</strong> Laser Processing & Smart Materials
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery" className="space-y-6">
            <div className="grid gap-6">
              {/* Photos Section */}
              <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-500 bg-slate-800/50 border border-slate-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-2xl text-blue-300">
                      <Camera className="w-6 h-6 text-blue-400" />
                      Research Photos
                    </CardTitle>
                    <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent text-cyan-400 border-cyan-500/50 hover:border-cyan-500 hover:bg-cyan-500/10">
                      <Plus className="w-4 h-4" />
                      Add Photo
                    </Button>
                  </div>
                  <CardDescription className="text-gray-400">Visual documentation of research work and equipment</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {workGallery.photos.map((photo) => (
                      <div
                        key={photo.id}
                        className="group relative overflow-hidden rounded-lg border border-cyan-500/30 hover:shadow-md transition-all duration-300 hover:border-cyan-500/60"
                      >
                        <img
                          src={photo.url || "/placeholder.svg"}
                          alt={photo.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                            <h4 className="font-semibold text-sm text-cyan-300">{photo.title}</h4>
                            <p className="text-xs opacity-90 text-gray-300">{photo.description}</p>
                            <Badge variant="secondary" className="mt-2 text-xs bg-cyan-500/20 text-cyan-300 border-cyan-500/50">
                              {photo.category}
                            </Badge>
                          </div>
                          <Button
                            size="sm"
                            variant="secondary"
                            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-cyan-500/20 hover:bg-cyan-500/40"
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Videos Section */}
              <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-green-500 bg-slate-800/50 border border-slate-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-2xl text-green-300">
                      <Video className="w-6 h-6 text-green-400" />
                      Research Videos
                    </CardTitle>
                    <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent text-cyan-400 border-cyan-500/50 hover:border-cyan-500 hover:bg-cyan-500/10">
                      <Plus className="w-4 h-4" />
                      Add Video
                    </Button>
                  </div>
                  <CardDescription className="text-gray-400">Process demonstrations and experimental procedures</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {workGallery.videos.map((video) => (
                      <div
                        key={video.id}
                        className="group relative overflow-hidden rounded-lg border border-green-500/30 hover:shadow-md transition-all duration-300 hover:border-green-500/60"
                      >
                        <img
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                          <div className="w-12 h-12 bg-green-500/40 rounded-full flex items-center justify-center group-hover:bg-green-500/60 transition-colors duration-300">
                            <div className="w-0 h-0 border-l-[8px] border-l-green-400 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-white">
                          <h4 className="font-semibold text-sm text-green-300">{video.title}</h4>
                          <p className="text-xs opacity-90 text-gray-300">{video.description}</p>
                          <Badge variant="secondary" className="mt-1 text-xs bg-green-500/20 text-green-300 border-green-500/50">
                            {video.category}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="education" className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-500 bg-slate-800/50 border border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-blue-300">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                  Academic Qualifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="relative pl-8 pb-6 border-l-2 border-blue-500/30 last:border-l-0">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                      <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-4 rounded-lg hover:shadow-md transition-shadow duration-300 border border-blue-500/20">
                        <h3 className="text-lg font-semibold text-blue-300">{edu.degree}</h3>
                        <p className="text-blue-400 font-medium">{edu.field}</p>
                        <p className="text-gray-300 font-medium">{edu.institution}</p>
                        <p className="text-sm text-gray-500 mb-2">{edu.period}</p>
                        <p className="text-sm text-gray-400">
                          <strong className="text-cyan-400">Thesis:</strong> {edu.thesis}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="experience" className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-green-500 bg-slate-800/50 border border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-green-300">
                  <Briefcase className="w-6 h-6 text-green-400" />
                  Work Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="relative pl-8 pb-6 border-l-2 border-green-500/30 last:border-l-0">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full"></div>
                      <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-4 rounded-lg hover:shadow-md transition-shadow duration-300 border border-green-500/20">
                        <h3 className="text-lg font-semibold text-green-300">{exp.position}</h3>
                        <p className="text-green-400 font-medium">{exp.institution}</p>
                        <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                        <p className="text-sm text-gray-400">{exp.focus}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="research" className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-purple-500 bg-slate-800/50 border border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-purple-300">
                  <BookOpen className="w-6 h-6 text-purple-400" />
                  Research Areas & Expertise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                  {researchAreas.map((area, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="p-3 text-center hover:bg-purple-500/40 hover:text-purple-200 transition-colors duration-300 cursor-pointer bg-purple-500/20 text-purple-200 border-purple-500/50"
                    >
                      {area}
                    </Badge>
                  ))}
                </div>
                <Separator className="my-6 bg-slate-700" />
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-purple-300">Research Exposure Areas</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        Wire Arc Additive Manufacturing of NiTi Shape Memory Alloy
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        Development of thin film-based Laser micro 3D printing
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        Physical Vapour Deposition (Flash Evaporation, Sputtering, E-beam)
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        Additive manufacturing (DED & SLM)
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        Laser Assisted machining using fibre laser (2KW)
                      </li>
                    </ul>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        Plasma surface Texturing
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        Triboelectric Nanogenerator
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        Numerical Modelling (Ansys APDL)
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        Laser Nitriding of Aluminium Alloys
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        Laser Patterning & Shock Peening
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="publications" className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-emerald-500 bg-slate-800/50 border border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-emerald-300">
                  <FileText className="w-6 h-6 text-emerald-400" />
                  Publications & Patents
                </CardTitle>
                <CardDescription>
                  <a
                    href="https://scholar.google.com/citations?hl=en&user=FKe-SsgAAAAJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 hover:underline transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Google Scholar Profile
                  </a>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-blue-400">Patent</h3>
                  <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-4 rounded-lg border border-blue-500/30">
                    <p className="font-medium text-gray-200">IMPLEMENTATION OF LASER DECAL TRANSFER TOWARDS micro-3D PRINTING</p>
                    <p className="text-sm text-gray-400">Status: Published</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-emerald-400">First Author Publications</h3>
                  <div className="space-y-4">
                    {firstAuthorPublications.map((pub, index) => (
                      <div
                        key={index}
                        className="border border-slate-700 p-4 rounded-lg hover:shadow-md transition-shadow duration-300 bg-gradient-to-r from-slate-800 to-slate-700"
                      >
                        <h4 className="font-medium mb-2 text-gray-200">{pub.title}</h4>
                        <p className="text-sm text-gray-400 mb-2">
                          <strong className="text-cyan-400">{pub.journal}</strong> ({pub.year})
                        </p>
                        <div className="flex items-center justify-between">
                          <a
                            href={pub.doi}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-400 hover:text-emerald-300 hover:underline text-sm flex items-center gap-1 transition-colors duration-300"
                          >
                            <ExternalLink className="w-3 h-3" />
                            View Publication
                          </a>
                          <Button variant="outline" size="sm" className="flex items-center gap-1 bg-transparent text-cyan-400 border-cyan-500/50 hover:border-cyan-500 hover:bg-cyan-500/10">
                            <Download className="w-3 h-3" />
                            PDF
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-4 rounded-lg border border-slate-600">
                  <h3 className="text-lg font-semibold mb-2 text-gray-300">Additional Publications</h3>
                  <p className="text-sm text-gray-400">
                    Multiple co-author publications in high-impact journals including Journal of Alloys and Compounds,
                    Journal of Manufacturing Process, Sensors and Actuators A: Physical, and several book chapters and
                    conference proceedings. Full list available on Google Scholar.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-yellow-500 bg-slate-800/50 border border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-yellow-300">
                  <Trophy className="w-6 h-6 text-yellow-400" />
                  Awards & Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg border border-yellow-500/30 hover:shadow-md transition-shadow duration-300 hover:border-yellow-500/60"
                    >
                      <Award className="w-6 h-6 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-300">{achievement}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-cyan-500 bg-slate-800/50 border border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-cyan-300">
                    <Award className="w-5 h-5 text-cyan-400" />
                    Technical Skills
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3 text-cyan-400">Analysis Software</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="hover:bg-cyan-500/40 hover:text-cyan-200 transition-colors duration-300 bg-cyan-500/10 text-cyan-300 border-cyan-500/50">
                        Ansys APDL
                      </Badge>
                      <Badge variant="outline" className="hover:bg-cyan-500/40 hover:text-cyan-200 transition-colors duration-300 bg-cyan-500/10 text-cyan-300 border-cyan-500/50">
                        COMSOL Multiphysics
                      </Badge>
                      <Badge variant="outline" className="hover:bg-cyan-500/40 hover:text-cyan-200 transition-colors duration-300 bg-cyan-500/10 text-cyan-300 border-cyan-500/50">
                        Abaqus
                      </Badge>
                      <Badge variant="outline" className="hover:bg-cyan-500/40 hover:text-cyan-200 transition-colors duration-300 bg-cyan-500/10 text-cyan-300 border-cyan-500/50">
                        MATLAB
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-cyan-400">Design Software</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="hover:bg-cyan-500/40 hover:text-cyan-200 transition-colors duration-300 bg-cyan-500/10 text-cyan-300 border-cyan-500/50">
                        AutoCAD
                      </Badge>
                      <Badge variant="outline" className="hover:bg-cyan-500/40 hover:text-cyan-200 transition-colors duration-300 bg-cyan-500/10 text-cyan-300 border-cyan-500/50">
                        Creo-Parametric
                      </Badge>
                      <Badge variant="outline" className="hover:bg-cyan-500/40 hover:text-cyan-200 transition-colors duration-300 bg-cyan-500/10 text-cyan-300 border-cyan-500/50">
                        SolidWorks
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-cyan-400">Programming</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="hover:bg-cyan-500/40 hover:text-cyan-200 transition-colors duration-300 bg-cyan-500/10 text-cyan-300 border-cyan-500/50">
                        Python
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-green-500 bg-slate-800/50 border border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-300">
                    <BookOpen className="w-5 h-5 text-green-400" />
                    Experimental Tools
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-green-400">Manufacturing</h4>
                    <p className="text-sm text-gray-400">Micro 3D Printing, Wire Arc Additive Manufacturing</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-green-400">Laser Systems</h4>
                    <p className="text-sm text-gray-400">CO₂ Laser, Nd:YAG ns laser, Continuous Fiber Laser</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-green-400">Characterization</h4>
                    <p className="text-sm text-gray-400">
                      XRD, SEM, XPS, DSC, Tensile/Fatigue testing, Raman Spectroscopy, AFM
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-green-400">Thin Films</h4>
                    <p className="text-sm text-gray-400">Sputtering, Flash Evaporation, E-beam Deposition</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="contact" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-rose-500 bg-slate-800/50 border border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-rose-300">
                    <Mail className="w-5 h-5 text-rose-400" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg border border-rose-500/30">
                    <Mail className="w-5 h-5 text-rose-400" />
                    <div>
                      <p className="font-medium text-gray-200">Email</p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-rose-400 hover:text-rose-300 hover:underline transition-colors duration-300 text-sm"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg border border-green-500/30">
                    <Phone className="w-5 h-5 text-green-400" />
                    <div>
                      <p className="font-medium text-gray-200">Phone</p>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="text-green-400 hover:text-green-300 hover:underline transition-colors duration-300 text-sm"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg border border-blue-500/30">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="font-medium text-gray-200">Location</p>
                      <p className="text-gray-400 text-sm">{personalInfo.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-violet-500 bg-slate-800/50 border border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-violet-300">
                    <Users className="w-5 h-5 text-violet-400" />
                    References
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm space-y-4">
                    <div className="p-3 bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg border border-violet-500/30">
                      <p className="font-semibold text-violet-300">Prof. I. A. Palani</p>
                      <p className="text-gray-400">Professor & Dean R&D, IIT Indore</p>
                      <p className="text-violet-400">palaniia@iiti.ac.in</p>
                      <p className="text-gray-500">+91-9009356097</p>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg border border-blue-500/30">
                      <p className="font-semibold text-blue-300">Prof. C P Paul</p>
                      <p className="text-gray-400">Dean Students Affairs, HBNI & Head, LAM Lab, RRCAT</p>
                      <p className="text-blue-400">paulcp@rrcat.gov.in</p>
                      <p className="text-gray-500">+91-9425666596</p>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg border border-green-500/30">
                      <p className="font-semibold text-green-300">Dr. Jinoop Arackal Narayanan</p>
                      <p className="text-gray-400">Assistant Professor, Teesside University, UK</p>
                      <p className="text-green-400">J.ArackalNarayanan@tees.ac.uk</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
