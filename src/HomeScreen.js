import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const POSTS = [
  {
    id: 1,
    avatar: 'https://www.bootdey.com/img/Content/avatar/avatar2.png',
    name: 'Sristi Priya',
    date: 'Nov 12, 2023',
    image: 'https://img.atlasobscura.com/QnRjgYDhBSOvS6ZhdWkB2FEukJkFWY9nwvOrBkLHXF0/rs:fill:12000:12000/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL2Fzc2V0/cy82ZWQxYTFkMC1m/MjgxLTQ3MTYtOGY5/YS05NjIwYTcyODJl/YjZkNWZjZjgzNTVj/MDFkN2M4YzVfVmll/d19vZl9OZXdfUml2/ZXJfR29yZ2VfQnJp/ZGdlLmpwZw.jpg',
    description: 'Made it to Itlay!  And it is so beautiful!!',
    likes: 3030,
    shares: 362,
  },
  {
    id: 2,
    avatar: 'https://www.bootdey.com/img/Content/avatar/avatar8.png',
    name: 'Swara Goenka',
    date: 'Nov 11, 2023',
    image: 'https://www.photographytalk.com/images/articles/2021/11/02/How_to_Take_Group_Photos.jpg',
    description: 'Thank you to all our amazing community members for your support in 2023. ',
    likes: 2143,
    shares: 717,
  },
  {
    id: 3,
    avatar: 'https://www.bootdey.com/img/Content/avatar/avatar2.png',
    name: 'Sumedh Anand',
    date: 'Nov 11, 2023',
    image: 'https://media1.popsugar-assets.com/files/thumbor/W7xBMooTKm4JRstd4jojSYBoEqY=/0x0:7952x5304/fit-in/792x528/top/filters:format_auto():upscale()/2020/03/24/559/n/45101125/06c61ac25e79fc30a64224.30513518_.jpg',
    description: 'Nothing better than this image!!!',
    likes: 4522,
    shares: 382,
  },
  {
    id: 4,
    avatar: 'https://www.bootdey.com/img/Content/avatar/avatar8.png',
    name: 'Node.js',
    date: 'Dec 31, 2020',
    image: 'https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    description: 'Ending the year with a bang! Thank you to all our amazing community members for your support in 2023.',
    likes: 2493,
    shares: 77,
  }
  // ...
];

const  HomeScreen = () => {
  return (
    <FlatList
      data={POSTS}
      renderItem={({ item }) => (
        <View style={styles.post}>
          <View style={styles.header}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
          </View>
          <Text style={styles.description}>{item.description}</Text>
          {item.image && <Image source={{ uri: item.image }} style={{ height: 200, width: '100%' }} />}
          <View style={styles.actions}>
            <TouchableOpacity onPress={() => {}} style={styles.actionButton}>
              <Text style={styles.actionText}>Like</Text>
              <Text style={styles.actionCount}>{item.likes}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.actionButton}>
              <Text style={styles.actionText}>Share</Text>
              <Text style={styles.actionCount}>{item.shares}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  post: {
    marginHorizontal:10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom:20,
    borderBottomWidth:0.5,
    borderBottomColor:'#808080',
    padding:10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  date: {
    fontSize: 14,
    color: 'gray',
    marginLeft: 10,
  },
  description: {
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    fontSize: 18,
    color: '#3b5998',
  },
  actionCount: {
    fontSize: 18,
    marginLeft: 5,
  },
});

export default HomeScreen;

         