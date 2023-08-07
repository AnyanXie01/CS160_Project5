import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

// Create Document Component
const MyDocument = ({ userData }) => (
    <Document>
        <Page size="A4" style={styles.page}>

            <View style={styles.section}>
                <Text class="title">RESUME</Text>
                <br></br>
                <Text>PROFILE</Text>
                <br></br>
                <Text>Name: {userData.name}</Text>
                <br></br>
                <Text>Email: {userData.email}</Text>
                <br></br>
                <Text>GitHub accout: {userData.githubaccount}</Text>
                <br></br>

                <Text>EDUCATION</Text>
                <br></br>
                <Text>Degree: {userData.degree}</Text>
                <br></br>
                <Text>institution: {userData.uni}</Text>
                <br></br>
                <Text>GPA: {userData.gpa}</Text>
                <br></br>
                <Text>graduation date: {userData.egd}</Text>
                <br></br>
                <Text>course: {userData.work}</Text>
                <br></br>

                <Text>EXPERIENCES</Text>
                <br></br>
                <Text>position: {userData.position}</Text>
                <br></br>
                <Text>company: {userData.company}</Text>
                <br></br>
                <Text>city: {userData.location}</Text>
                <br></br>
                <Text>startdate: {userData.startdate}</Text>
                <br></br>
                <Text>enddate: {userData.enddate}</Text>
                <br></br>
                <Text>responsibility1: {userData.responsibility1}</Text>
                <br></br>
                <Text>responsibility2: {userData.responsibility2}</Text>
                <br></br>
                <Text>responsibility3: {userData.responsibility3}</Text>
                <br></br>

                <Text>PROJECTS</Text>
                <br></br>
                <Text>projectname: {userData.projectname}</Text>
                <br></br>
                <Text>contribution1: {userData.cont}</Text>
                <br></br>
                <Text>contribution2: {userData.cont}</Text>
                <br></br>

                <Text>LANGUAGES: </Text>
                <br></br>
                <Text>{userData.lang}</Text>
                <br></br>

                <Text>TOOLS: </Text>
                <br></br>
                <Text> {userData.tool}</Text>

            </View>
        </Page>
    </Document>
);
export default MyDocument;