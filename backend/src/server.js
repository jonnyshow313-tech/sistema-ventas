import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json());

const products = [
  { id: 1, name: 'Laptop Pro', price: 1200, stock: 15 },
  { id: 2, name: 'Mouse Gamer', price: 60, stock: 40 },
  { id: 3, name: 'Monitor 27"', price: 350, stock: 12 },
  { id: 4, name: 'Teclado Mecánico', price: 110, stock: 26 }
];

const sales = [
  { id: 1, customer: 'Ana López', total: 1500, date: '2026-11-01' },
  { id: 2, customer: 'Carlos Ruiz', total: 850, date: '2026-11-02' },
  { id: 3, customer: 'María Torres', total: 420, date: '2026-11-02' }
];

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Sistema de ventas funcionando correctamente' });
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/sales', (req, res) => {
  res.json(sales);
});

app.get('/api/dashboard', (req, res) => {
  const totalSales = sales.reduce((sum, sale) => sum + sale.total, 0);

  res.json({
    totalSales,
    totalProducts: products.length,
    totalCustomers: sales.length,
    monthlyGrowth: 18.4
  });
});

app.listen(PORT, () => {
  console.log(`Backend ejecutándose en http://localhost:${PORT}`);
});
