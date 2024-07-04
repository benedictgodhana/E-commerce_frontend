<template>
  <div>
    <v-container>
      <v-row>
        <!-- First quick link card -->
        <v-col cols="12" lg="4">
          <v-card elevation="4" style="border-radius: 10px;">
            <!-- Image representing the system -->
            <v-card-title class="text-overline font-weight-bold"><v-icon>mdi-cash</v-icon> Finance Documents</v-card-title>
            <hr>
            <!-- List of Finance documents -->
            <v-list dense style="text-transform: capitalize;">
              <!-- Document links -->
              <a :href="document.link" target="_blank" v-for="document in financeDocuments" :key="document.id"  style="text-decoration: none;">
                <v-list-item>
                  <v-icon>mdi-file-document</v-icon> {{ document.title }}
                </v-list-item>
              </a>
            </v-list>
          </v-card>
        </v-col>
        
        <!-- Second quick link card -->
        <v-col cols="12" lg="4">
          <v-card elevation="4" style="border-radius: 10px;">
            <!-- Image representing the system -->
            <v-card-title class="text-overline font-weight-bold "><v-icon>mdi-account-group</v-icon> HR Documents</v-card-title>
            <hr>
            <!-- List of HR documents -->
            <v-list dense style="text-transform: capitalize;">
              <!-- Document links -->
              <a :href="document.link" target="_blank" v-for="document in hrDocuments" :key="document.id"  style="text-decoration: none;">
                <v-list-item>
                  <v-icon>mdi-file-document</v-icon> {{ document.title }}
                </v-list-item>
              </a>
            </v-list>
          </v-card>
        </v-col>
        
        <!-- Third quick link card -->
        <v-col cols="12" lg="4">
          <v-card elevation="4" style="border-radius: 10px;">
            <!-- Image representing the system -->
            <v-card-title class="text-overline font-weight-bold "><v-icon>mdi-cart-outline</v-icon> Requisition Forms</v-card-title>
            <hr>
            <!-- List of Requisition Forms -->
            <v-list dense style="text-transform: capitalize;">
              <!-- Document links -->
              <a :href="document.link" target="_blank" v-for="document in requisitionForms" :key="document.id"  style="text-decoration: none;">
                <v-list-item>
                  <v-icon>mdi-file-document</v-icon> {{ document.title }}
                </v-list-item>
              </a>
            </v-list>
          </v-card>
        </v-col>
        
        <!-- Fourth quick link card -->
        <v-col cols="12" lg="4">
          <v-card elevation="4" style="border-radius: 10px;">
            <!-- Image representing the system -->
            <v-card-title class="text-overline font-weight-bold "><v-icon>mdi-image</v-icon> Logos and Presentations</v-card-title>
            <hr>
            <!-- List of Logos and Presentations -->
            <v-list dense style="text-transform: capitalize;">
              <!-- Document links -->
              <a :href="document.link" target="_blank" v-for="document in logosAndPresentations" :key="document.id"  style="text-decoration: none;">
                <v-list-item>
                  <v-icon>mdi-file-document</v-icon> {{ document.title }}
                </v-list-item>
              </a>
            </v-list>
          </v-card>
        </v-col>
        
        <!-- Fifth quick link card -->
        <v-col cols="12" lg="4">
          <v-card elevation="4" style="border-radius: 10px;">
            <!-- Image representing the system -->
            <v-card-title class="text-overline font-weight-bold "><v-icon>mdi-file-document-outline</v-icon> Policies</v-card-title>
            <hr>
            <!-- List of Policies -->
            <v-list dense style="text-transform: capitalize;">
              <!-- Document links -->
              <a :href="document.link" target="_blank" v-for="document in policies" :key="document.id" style="text-decoration: none;">
                <v-list-item>
                  <v-icon>mdi-file-document</v-icon> {{ document.title }}
                </v-list-item>
              </a>
            </v-list>
          </v-card>
        </v-col>
        
        <!-- Add more quick link cards as needed -->
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      financeDocuments: [
  { id: 1, title: 'General Claim Form', link: 'https://example.com/general-claim-form' },
  { id: 2, title: 'IOU Form', link: 'https://example.com/iou-form' },
  { id: 3, title: 'Invoice Request Form', link: 'https://example.com/invoice-request-form' },
  { id: 4, title: 'Lecturers Claim Form', link: 'https://example.com/lecturers-claim-form' },
  { id: 5, title: 'International Per Diem Rates', link: 'https://example.com/international-per-diem-rates' },
  { id: 6, title: 'Locals Per Diem Rates', link: 'https://example.com/locals-per-diem-rates' },
  // Add more finance documents here
],
hrDocuments: [
  { id: 1, title: 'Employee Requisition Form', link: 'https://example.com/employee-requisition-form' },
  { id: 2, title: 'Contract Renewal Full-time Staff', link: 'https://example.com/contract-renewal-full-time-staff' },
  { id: 3, title: 'Contract Renewal Interns', link: 'https://example.com/contract-renewal-interns' },
  { id: 4, title: 'Staff Training Form - General Staff', link: 'https://example.com/staff-training-form-general-staff' },
  { id: 5, title: 'Administration Staff Employee Assessment', link: 'https://example.com/administration-staff-employee-assessment' },
  { id: 6, title: 'Probation Assessment', link: 'https://example.com/probation-assessment' },
  // Add more HR documents here
],

requisitionForms: [
  { id: 1, title: 'Request Forms', link: 'https://example.com/request-forms' },
  { id: 2, title: 'Store Requisition Forms', link: 'https://example.com/store-requisition-forms' },
  { id: 3, title: 'Internet Service Request Form', link: 'https://example.com/internet-service-request-form' },
  { id: 4, title: 'Item Requisition Form', link: 'https://example.com/office-supplies-requisition-form' },
  { id: 5, title: 'Equipment Requisition Form', link: 'https://example.com/equipment-requisition-form' },
  // Add more requisition forms here
],

logosAndPresentations: [
  { id: 1, title: 'iLab/iBiz Logos', link: 'https://example.com/ilab-ibiz-logos' },
  { id: 2, title: 'iLab/iBiz Templates PPT', link: 'https://example.com/ilab-ibiz-templates-ppt' },
  { id: 3, title: 'iLab/iBiz Slide Deck', link: 'https://example.com/ilab-ibiz-slide-deck' },
  
  // Add more logos and presentations here
],

      policies: [
        { id: 1, title: 'University Policies', link: 'https://example.com/university-policies' },
        { id: 2, title: 'iLab Policies - Department Policies', link: 'https://example.com/ilab-policies' },
        // Add more Policies here
      ],
      // Add more document categories and their respective arrays as needed
    };
  },
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
