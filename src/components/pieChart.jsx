
import { Pie, PieChart, Tooltip } from 'recharts';

export const GPie = () => {

   const dados = {
    data01: [
        { name: "Desenvolvimento", value: 400 },
        { name: "Design", value: 300 },
        { name: "Marketing", value: 200 },
        { name: "Infraestrutura", value: 100 }
    ],

    data02: [
        { name: "Janeiro", value: 120 },
        { name: "Fevereiro", value: 180 },
        { name: "Março", value: 150 },
        { name: "Abril", value: 220 },
        { name: "Maio", value: 190 }
    ]
};

    return (
        <PieChart
            style={{
                width: '100%',
                height: '100%',
                maxWidth: '500px',
                maxHeight: '80vh',
                aspectRatio: 1
            }}
            responsive
        >
            <Pie
                data={dados.data01}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius="50%"
                fill="#8884d8"
                stroke="white"
                isAnimationActive={true}
            />

            <Pie
                data={dados.data02}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius="60%"
                outerRadius="80%"
                fill="#82ca9d"
                stroke="white"
                label
                isAnimationActive={true}
            />

            <Tooltip />
        </PieChart>
    );
};
