import { FlatList, StyleSheet, Text, View } from "react-native";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface ListaProps {
    posts: Post[];
}

export default function Lista({ posts }: ListaProps) {
    const renderizarItem = ({ item }: {item: Post}) => {
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.postTitle}>{item.title}</Text>
                <Text style={styles.postAuthor}>User ID: {item.userId}</Text>
                <Text style={styles.postId}>Post ID: {item.id}</Text>
                <Text style={styles.postBody}>{item.body}</Text>
            </View>
        )
    }
    return (
        <FlatList
            data={posts}
            renderItem={renderizarItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle= {styles.listContent}
        />
    )
}
const styles = StyleSheet.create({
  listContent: {
    paddingBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    marginStart: 8,
    marginEnd: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 8,
  },
  postAuthor: {
    fontSize: 18,
    color: '#6c757d',
    marginBottom: 4,
  },
  postId: {
    fontSize: 14,
    color: '#6c757d',
    marginBottom: 8,
  },
  postBody: {
    fontSize: 15,
    color: '#495057',
    lineHeight: 22,
  },
});