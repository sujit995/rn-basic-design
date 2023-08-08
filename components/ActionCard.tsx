import { View, Text, StyleSheet, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const FancyCard = () => {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>
      <View style={[styles.card, styles.cardElevarted]}>
      <View style={styles.headingContainer}>
      <Text style={styles.headerText}>What's new in Javascript 21 - ES12</Text>
      </View>
        <Image source={{uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80'}} style={styles.cardImage}/>
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Taj Mahal</Text>
            <Text style={styles.cardLabel}>Crown of the Palace</Text>
            <Text style={styles.cardDesc}> it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.</Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={() => openWebsite('https://zapier.com/blog/best-blog-sites/?utm_source=google&utm_medium=cpc&utm_campaign=gaw-row-nua-evr-search_nb_desktop_blog_prospecting_developing1_developing2-ads&utm_adgroup=DSA-BestApps-Form_Builder&utm_term=&utm_content=_pcrid_659058345728_pkw__pmt__pdv_c_slid__pgrid_157760468828_ptaid_dsa-2066874513104_&gad=1&gclid=CjwKCAjww7KmBhAyEiwA5-PUSkdCJM6-WX73Id_DodKWOG1bu6eHbxaI1ughxwAuQ14jVwrwRN09bBoCTHsQAvD_BwE')}>
                <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openWebsite('https://www.linkedin.com/in/sujit-mishra-3b9365188')}>
                <Text style={styles.socialLinks}>Follow Me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default FancyCard;

const styles = StyleSheet.create({
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: 330,
        height: 480,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    cardElevarted: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    cardImage: {
        height: 180,
        marginBottom: 8
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        color: '#000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 6
    },
    cardLabel: {
        color: '#000',
        fontSize: 14,
        marginBottom: 6
    },
    cardDesc: {
        color: '#242B2E',
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1
    },
    cardFooter: {
        color: '#242B2E',
        marginBottom: 6,
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    socialLinks: {
        fontSize: 16,
        color: '#000',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 6
    }
})