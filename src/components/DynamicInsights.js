// src/components/DynamicInsights.js

import React from "react";
import { motion } from "framer-motion";
import {
    LineChart,
    Line,
    PieChart,
    Pie,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell,
    Legend,
} from "recharts";

const DynamicInsights = () => {
    // Sample data
    const lineChartData = [
        { month: "Jan", clients: 5 },
        { month: "Feb", clients: 8 },
        { month: "Mar", clients: 12 },
        { month: "Apr", clients: 20 },
        { month: "May", clients: 28 },
        { month: "Jun", clients: 35 },
    ];

    const barChartData = [
        { service: "Data Science", revenue: 80 },
        { service: "Consulting", revenue: 60 },
        { service: "AI Models", revenue: 90 },
        { service: "Training", revenue: 70 },
    ];

    const pieChartData = [
        { technology: "Python", value: 45 },
        { technology: "R", value: 25 },
        { technology: "SQL", value: 15 },
        { technology: "JavaScript", value: 15 },
    ];

    const pieColors = ["#2563eb", "#1d4ed8", "#3b82f6", "#93c5fd"];

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold text-blue-900 text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    Dynamic Insights
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Line Chart */}
                    <motion.div
                        className="bg-gray-50 p-6 rounded-lg shadow-md"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                            Client Growth Over Time
                        </h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={lineChartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="clients"
                                    stroke="#2563eb"
                                    strokeWidth={3}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </motion.div>

                    {/* Bar Chart */}
                    <motion.div
                        className="bg-gray-50 p-6 rounded-lg shadow-md"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                            Revenue by Service
                        </h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={barChartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="service" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="revenue" fill="#2563eb">
                                    {barChartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </motion.div>

                    {/* Pie Chart */}
                    <motion.div
                        className="bg-gray-50 p-6 rounded-lg shadow-md"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                            Technology Expertise
                        </h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={pieChartData}
                                    dataKey="value"
                                    nameKey="technology"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={100}
                                    fill="#2563eb"
                                    label
                                >
                                    {pieChartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </motion.div>

                    {/* Animated Stats */}
                    <motion.div
                        className="bg-blue-600 p-6 rounded-lg shadow-md text-white flex flex-col justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <h3 className="text-2xl font-semibold mb-4">Our Achievements</h3>
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <p className="text-5xl font-bold">150+</p>
                                <p className="text-lg">Projects Completed</p>
                            </div>
                            <div>
                                <p className="text-5xl font-bold">100+</p>
                                <p className="text-lg">Satisfied Clients</p>
                            </div>
                            <div>
                                <p className="text-5xl font-bold">20+</p>
                                <p className="text-lg">Industry Awards</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default DynamicInsights;
