import React from "react";
import style from './Dashboard.module.css'
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { IoDocuments } from 'react-icons/io5'
import { FaThList, FaDownload } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { RiLoader3Fill } from 'react-icons/ri'
import { AiFillWarning } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'
import Status from "./Status/Status";

export default function Dashboard () {
    return (
        <>
            <div className="container">
                <div className={style.dashboard}>
                    <div className={style.dashboard_head}>
                        <div className={style.flex}>
                            <FaThList className={style.headIcon}/>
                            <p className={style.head_txt}>Дашбоард</p>
                        </div>
                        <div className={style.flex}>
                            <FiUsers className={style.btnIcon}/>
                            <p className={style.btn_txt}>Узнать больше</p>
                        </div>
                    </div>
                    <div className={style.dashboard_body}>
                        <Card className={style.card}>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Change complexity
                                </Typography>
                                <Button variant="outlined" color="warning" 
                                style={{
                                    borderRadius: 15, 
                                    fontSize: 12,
                                }}>
                                    средний-сложный
                                </Button>
                                <Typography gutterBottom variant="h6" component="div" style={{
                                    marginTop: 20, 
                                    color: 'green',
                                    textTransform: "uppercase",
                                    fontSize: 12,
                                    fontWeight: 'bold'
                                }}>
                                    Обновить оценку
                                </Typography>
                            </CardContent>
                            <IoDocuments className={style.cardIcon}/>
                        </Card>

                        <Card  className={style.card}>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Change on a page
                                </Typography>
                                <Typography gutterBottom variant="h4" component="div">
                                    12
                                </Typography>
                                <Typography gutterBottom component="div">
                                    Завершено
                                </Typography>
                                
                                <Typography gutterBottom variant="h6" component="div" style={{
                                    marginTop: 20, 
                                    color: 'green',
                                    textTransform: "uppercase",
                                    fontSize: 12,
                                    fontWeight: 'bold'
                                }}>
                                    Обновить оценку
                                </Typography>
                            </CardContent>
                            <IoDocuments className={style.cardIcon}/>
                        </Card>

                        <Card  className={style.card}>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Практические результаты
                                </Typography>
                                <Box sx={{ 
                                        display: 'flex', 
                                        justifyContent: 'space-between',
                                        width: 200 
                                    }}
                                >
                                    <Box>
                                        <Typography gutterBottom variant="h4" component="div"> 
                                            7
                                        </Typography>
                                        <Typography component="div">
                                            завершено 
                                        </Typography>
                                    </Box>
                                    <Box sx={{mx: 2}}>
                                        <Typography gutterBottom variant="h4" component="div">
                                            12
                                        </Typography>
                                        <Typography  component="div">
                                            общее
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography gutterBottom variant="h4" component="div">
                                            0
                                        </Typography>
                                        <Typography component="div">
                                            просрочено
                                        </Typography>
                                    </Box>
                                </Box>    
                                <Typography gutterBottom variant="h6" component="div" style={{
                                    marginTop: 20, 
                                    color: 'green',
                                    textTransform: "uppercase",
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                    
                                }}>
                                    Обновить оценку
                                </Typography>
                            </CardContent>
                            <FaThList className={style.cardIcon}/>
                        </Card>

                        <Card  className={style.card}>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Заинтересованные стороны
                                </Typography>
                                <Typography gutterBottom variant="h4" component="div">
                                    2535
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div" style={{
                                    marginTop: 20, 
                                    color: '#1a7ef0',
                                    textTransform: "uppercase",
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <RiLoader3Fill className={style.txtCardIcon}/>
                                    матрицы стеков
                                </Typography>
                            </CardContent>
                            <FiUsers className={style.cardIcon}/>
                        </Card>

                        <Card  className={style.card}>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Изменение воздействия
                                </Typography>
                                <Typography gutterBottom variant="h4" component="div">
                                    15
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div" style={{
                                    marginTop: 20, 
                                    color: '#1a7ef0',
                                    textTransform: "uppercase",
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <RiLoader3Fill className={style.txtCardIcon}/>
                                    тепловая карта влияния
                                </Typography>
                            </CardContent>
                            <FaDownload className={style.cardIcon}/>
                        </Card>

                        <Card  className={style.card}>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Риски
                                </Typography>
                                <Box sx={{ 
                                        display: 'flex', 
                                        justifyContent: 'space-between',
                                        width: 200 
                                    }}
                                >
                                    <Box>
                                        <Typography gutterBottom variant="h4" component="div"> 
                                            2
                                        </Typography>
                                        <Typography component="div">
                                            закрыто
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography gutterBottom variant="h4" component="div">
                                            6
                                        </Typography>
                                        <Typography  component="div">
                                            общее
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography gutterBottom variant="h4" component="div">
                                            4
                                        </Typography>
                                        <Typography component="div">
                                            открыто
                                        </Typography>
                                    </Box>
                                </Box>    
                                <Typography gutterBottom variant="h6" component="div" style={{
                                    marginTop: 20, 
                                    color: '#1a7ef0',
                                    textTransform: "uppercase",
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <RiLoader3Fill className={style.txtCardIcon}/>
                                    показатели рисков
                                </Typography>
                            </CardContent>
                            <AiFillWarning className={style.cardIcon}/>
                        </Card>

                        <Card  className={style.card}>
                            <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Деятельность
                            </Typography>
                            <Box sx={{ 
                                        display: 'flex', 
                                        justifyContent: 'space-between',
                                        width: 200 
                                    }}
                                >
                                    <Box>
                                        <Typography gutterBottom variant="h4" component="div"> 
                                            2
                                        </Typography>
                                        <Typography component="div">
                                            закрыто
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography gutterBottom variant="h4" component="div">
                                            38
                                        </Typography>
                                        <Typography  component="div">
                                            общее
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography gutterBottom variant="h4" component="div">
                                            2
                                        </Typography>
                                        <Typography component="div">
                                            открыто
                                        </Typography>
                                    </Box>
                                </Box>    
                                <Typography gutterBottom variant="h6" component="div" style={{
                                    marginTop: 20, 
                                    color: '#1a7ef0',
                                    textTransform: "uppercase",
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <RiLoader3Fill className={style.txtCardIcon}/>
                                    тепловая карта влияния
                                </Typography>
                            </CardContent>
                            <TiDeleteOutline className={style.cardIcon}/>
                        </Card>
                    </div>
                </div>
                <Status />
            </div>
        </>
    )
}