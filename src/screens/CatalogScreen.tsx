import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Data dummy sementara
const DUMMY_PRODUCTS = [
  { id: '1', title: 'Tas Ransel Gunung', price: 250000, stock: 15 },
  { id: '2', title: 'Sepatu Boots Kulit', price: 450000, stock: 8 },
  { id: '3', title: 'Jaket Parka Outdoor', price: 300000, stock: 20 },
];

const CatalogScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Katalog Produk</Text>
        <Text style={styles.subtitle}>Sinkronisasi Stok Aktif</Text>
      </View>

      <FlatList
        data={DUMMY_PRODUCTS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardInfo}>
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productPrice}>Rp {item.price.toLocaleString('id-ID')}</Text>
              <Text style={styles.productStock}>Stok: {item.stock}</Text>
            </View>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Beli</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  header: { padding: 24, backgroundColor: '#1E293B', paddingTop: 60 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#FFFFFF' },
  subtitle: { fontSize: 14, color: '#94A3B8', marginTop: 4 },
  listContainer: { padding: 16 },
  card: { backgroundColor: '#FFFFFF', padding: 16, borderRadius: 8, marginBottom: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2 },
  cardInfo: { flex: 1 },
  productTitle: { fontSize: 16, fontWeight: 'bold', color: '#1E293B' },
  productPrice: { fontSize: 14, color: '#3B82F6', marginTop: 4, fontWeight: '600' },
  productStock: { fontSize: 12, color: '#64748B', marginTop: 4 },
  buyButton: { backgroundColor: '#3B82F6', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 6 },
  buyButtonText: { color: '#FFFFFF', fontWeight: 'bold' },
});

export default CatalogScreen;