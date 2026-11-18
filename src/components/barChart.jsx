import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export const GBarra = () => {

    const data = [
        { label: "Janeiro", Meta: 100, Atingido: 80 },
        { label: "Fevereiro", Meta: 120, Atingido: 90 },
        { label: "Março", Meta: 200, Atingido: 120 },
        { label: "Abril", Meta: 160, Atingido: 180 },
        { label: "Maio", Meta: 130, Atingido: 180 },
        { label: "Junho", Meta: 200, Atingido: 180 },
        { label: "Julho", Meta: 80, Atingido: 80 },
        { label: "Agosto", Meta: 90, Atingido: 50 },
        { label: "Setembro", Meta: 140, Atingido: 120 },
        { label: "Outubro", Meta: 110, Atingido: 80 },
        { label: "Novembro", Meta: 75, Atingido: 20 },
        { label: "Dezembro", Meta: 80, Atingido: 10 }
    ]

    return (
        <BarChart
            style={{ width: '100%', maxWidth: '1200px', maxHeight: '70vh', aspectRatio: 1.618 }}
            responsive
            data={data}
            margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
            }}
        >
            <CartesianGrid />
            <XAxis dataKey="label" />
            <YAxis width="auto" />
            <Tooltip />
            <Legend />
            <Bar fill='orange' dataKey="Meta" radius={[10, 10, 0, 0]} />
            <Bar fill='blue' dataKey="Atingido" radius={[10, 10, 0, 0]} />
        </BarChart>
    )
}