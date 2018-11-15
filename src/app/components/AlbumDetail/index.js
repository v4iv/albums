import React from 'react';
import { Text, View, Image, Linking, StyleSheet } from 'react-native';
import Card from '../Card';
import CardSection from '../CardSection';
import Button from '../Button';

const AlbumDetail = ({ album }) => {
    const { thumbnail_image, title, artist, image } = album;
    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image
                        style={styles.thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    style={styles.imageStyle}
                    source={{ uri: image }}
                />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(album.url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = StyleSheet.create({
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
});

export default AlbumDetail;
