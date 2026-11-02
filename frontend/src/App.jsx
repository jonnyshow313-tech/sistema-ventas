const metrics = [
  { label: 'Ventas totales', value: '$ 12,450', trend: '+12.5%' },
  { label: 'Productos', value: '128', trend: '+7.2%' },
  { label: 'Clientes', value: '86', trend: '+4.1%' },
  { label: 'Pedidos hoy', value: '24', trend: '+9.8%' }
];

const products = [
  { name: 'Laptop Pro', stock: 15, price: '$1,200' },
  { name: 'Mouse Gamer', stock: 40, price: '$60' },
  { name: 'Monitor 27"', stock: 12, price: '$350' },
  { name: 'Teclado Mecánico', stock: 26, price: '$110' }
];

const recentSales = [
  { customer: 'Ana López', total: '$1,500', date: '2026-11-01' },
  { customer: 'Carlos Ruiz', total: '$850', date: '2026-11-02' },
  { customer: 'María Torres', total: '$420', date: '2026-11-02' }
];

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <h1>Sistema de Ventas</h1>
        <button className="primary-btn">Nuevo Pedido</button>
      </header>

      <section className="metrics-grid">
        {metrics.map((metric) => (
          <article key={metric.label} className="card metric-card">
            <span>{metric.label}</span>
            <h2>{metric.value}</h2>
            <small>{metric.trend} vs. mes anterior</small>
          </article>
        ))}
      </section>

      <section className="content-grid">
        <article className="card">
          <h3>Productos más vendidos</h3>
          <ul className="list">
            {products.map((product) => (
              <li key={product.name}>
                <span>{product.name}</span>
                <div>
                  <strong>{product.stock}</strong> stock
                </div>
                <em>{product.price}</em>
              </li>
            ))}
          </ul>
        </article>

        <article className="card">
          <h3>Ventas recientes</h3>
          <ul className="list sales-list">
            {recentSales.map((sale) => (
              <li key={`${sale.customer}-${sale.date}`}>
                <span>{sale.customer}</span>
                <div>
                  <strong>{sale.total}</strong>
                </div>
                <em>{sale.date}</em>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
}

export default App;
