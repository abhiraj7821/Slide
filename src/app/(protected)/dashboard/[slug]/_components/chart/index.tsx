'use client'
import { Card,CardContent } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import React from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis } from 'recharts'

function Chart() {

    const chartData = [
        {month: 'Jabuary', desktop:86},
        {month: 'February', desktop:50},
        {month: 'March', desktop:37},
        {month: 'April', desktop:73},
        {month: 'May', desktop:29},
        {month: 'June', desktop:14},
        {month: 'July', desktop:20},
        {month: 'Augest', desktop:55},
    ]

    const chartConfig = {
        desktop:{
            label:'Desktop',
            color: '#2563eb',
        }
    }
    return (
        <Card  className='border-none p-2 z-10 bg-transparent'>
            <CardContent className='p-0 '>
                <ResponsiveContainer height={300} width={"100%"}>
                    <ChartContainer config={chartConfig}>
                        <AreaChart 
                        accessibilityLayer 
                        data={chartData}
                        margin={{left:12,right:12}}
                        >
                            <CartesianGrid vertical={false}/>
                            <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value)=>value.slice(0,3)}
                            />
                            <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator='line'/>}
                            />
                            <Area
                            dataKey="desktop"
                            type="natural"
                            fill="var(--color-desktop)"
                            fillOpacity={0.4}
                            stroke="var(--color-desktop"
                            />
                        </AreaChart>
                    </ChartContainer>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}

export default Chart