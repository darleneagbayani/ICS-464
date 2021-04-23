import {StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 2, 
        justifyContent: 'center', 
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '10%',
    },

    tabContainer: {
        zIndex: 1000,
        flex: 3,
    },

    title: {
        color: 'tomato',
        fontSize: 22,
        fontWeight: '700',
        marginTop: 20,
    },

    descriptionTitle: {
        color: '#6c6c6c',
        fontSize: 14,
        fontWeight: '500',
        paddingLeft: 25,
        paddingRight: 25,
        marginTop: 5,
    },

    descriptionCaption: {
        color: '#6c6c6c',
        fontSize: 12,
        paddingLeft: 25,
        paddingRight: 25,
        marginTop: 5,
        paddingBottom: 15,
    },

    card: {
        backgroundColor: 'transparent',
        top: 20,
        height: windowHeight,
        width: windowWidth,
    },

    cardIndividual: {
        justifyContent: 'space-between',
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 8,
        marginBottom: 8,
    },

    bottomBorder: {
        marginLeft: 25,
        marginTop: 5,
        marginBottom: 15,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        width: windowWidth -50,
    },
});

export default styles;