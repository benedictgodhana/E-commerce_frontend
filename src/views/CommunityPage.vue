<template>
  <v-container style="max-width: 1500px;">
    <v-card-title class="text-center text-overline font-weight-bold ms-1 mb-2">Our Departments</v-card-title>
    <br>
    <v-timeline direction="horizontal">
      <v-timeline-item>
        <template v-slot:opposite>
          <v-card outlined width="444">
            <v-card-title class="text-overline font-weight-bold ms-1 mb-2">eHealth <v-icon>mdi-hospital</v-icon></v-card-title>
            <v-card-text>
              eHealth focuses on leveraging technology to enhance healthcare services, including telemedicine, electronic health records, and health informatics.
            </v-card-text>
          </v-card>
        </template>
      </v-timeline-item>

      <v-timeline-item>
        <template v-slot:opposite>
          <v-card outlined width="444" >
            <v-card-title class="text-overline font-weight-bold ms-1 mb-2">IT Outsourcing & BITCU <v-icon>mdi-server</v-icon></v-card-title>
            <v-card-text>
              IT Outsourcing & BITCU provides IT services to external clients and supports the Blockchain and IT Convergence Unit (BITCU) in exploring innovative applications of blockchain technology.
            </v-card-text>
          </v-card>
        </template>
      </v-timeline-item>

      <v-timeline-item>
        <template v-slot:opposite>
          <v-card outlined width="444">
            <v-card-title class="text-overline font-weight-bold ms-1 mb-2">Digital Learning <v-icon>mdi-school</v-icon></v-card-title>
            <v-card-text>
              Digital Learning develops and implements digital educational solutions, including e-learning platforms, online courses, and educational apps.
            </v-card-text>
          </v-card>
        </template>
      </v-timeline-item>

     
     

      
    </v-timeline>
  </v-container>

  <v-container style="max-width: 1500px;">
    <v-timeline direction="horizontal">
      <v-timeline-item>
        <template v-slot:opposite>
          <v-card outlined  width="444">
            <v-card-title class="text-overline font-weight-bold ms-1 mb-2">IT Security <v-icon>mdi-lock</v-icon></v-card-title>
            <v-card-text>
              IT Security focuses on protecting digital assets and information systems from cybersecurity threats, including data breaches, malware attacks, and unauthorized access.
            </v-card-text>
          </v-card>
        </template>
      </v-timeline-item>

     

      <v-timeline-item>
        <template v-slot:opposite>
          <v-card outlined  width="444">
            <v-card-title class="text-overline font-weight-bold ms-1 mb-2">IR & EE <v-icon>mdi-electric-switch</v-icon></v-card-title>
            <v-card-text>
              IR & EE focuses on research and development in the fields of Information Retrieval (IR) and Electrical Engineering (EE), with projects ranging from information retrieval algorithms to electronic circuit design.
            </v-card-text>
          </v-card>
        </template>
      </v-timeline-item>

      <v-timeline-item>
        <template v-slot:opposite>
          <v-card outlined  width="444">
            <v-card-title class="text-overline font-weight-bold ms-1 mb-2">PR <v-icon>mdi-bullhorn</v-icon></v-card-title>
            <v-card-text>
              PR (Public Relations) department handles communication and outreach activities to promote iLab's projects, initiatives, and achievements to the public, stakeholders, and the media.
            </v-card-text>
          </v-card>
        </template>
      </v-timeline-item>
    
    </v-timeline>
  </v-container>
  <v-container style="max-width: 1500px;">
    <v-timeline direction="horizontal">
      <v-timeline-item>
        <template v-slot:opposite>
          <v-card outlined  width="444">
            <v-card-title class="text-overline font-weight-bold ms-1 mb-2">iBizAfrica <v-icon>mdi-lightbulb-on</v-icon></v-card-title>
            <v-card-text>
              iBizAfrica serves as an incubator and accelerator for startups and entrepreneurs, providing support, resources, and mentorship to foster innovation and business growth.
            </v-card-text>
          </v-card>
        </template>
      </v-timeline-item>

      <v-timeline-item>
        <template v-slot:opposite>
          <v-card outlined width="444">
            <v-card-title class="text-overline font-weight-bold ms-1 mb-2">Data Science <v-icon>mdi-chart-bar</v-icon></v-card-title>
            <v-card-text>
              Data Science department focuses on analyzing and interpreting complex digital data to aid decision-making processes.
            </v-card-text>
          </v-card>
        </template>
      </v-timeline-item>

      <v-timeline-item>
        <template v-slot:opposite>
          <v-card outlined width="444">
            <v-card-title class="text-overline font-weight-bold ms-1 mb-2">IoT <v-icon>mdi-wifi</v-icon></v-card-title>
            <v-card-text>
              IoT department explores and implements Internet of Things (IoT) solutions for various applications, including smart cities, industrial automation, and environmental monitoring.
            </v-card-text>
          </v-card>
        </template>
      </v-timeline-item>

    </v-timeline>
  </v-container>
</template>
