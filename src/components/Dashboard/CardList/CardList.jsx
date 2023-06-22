import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { RiLoader3Fill } from "react-icons/ri";
import { IoDocuments } from "react-icons/io5";
import { FaThList, FaDownload } from "react-icons/fa";
import { AiFillWarning } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";
import style from "./CardList.module.css";

export default function CardList() {
  return (
    <div className={style.dashboard_body}>
      <Card className={style.card}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Change complexity
          </Typography>
          <Button
            variant="outlined"
            color="warning"
            className={style.button}
          >
            средний-сложный
          </Button>
          <Typography
            gutterBottom
            variant="p"
            component="div"
            className={style.sb_title}
          >
            Обновить оценку
          </Typography>
        </CardContent>
        <IoDocuments className={style.card_icon} />
      </Card>

      <Card className={style.card}>
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

          <Typography
            gutterBottom
            variant="p"
            component="div"
            className={style.sb_title}
          >
            Обновить оценку
          </Typography>
        </CardContent>
        <IoDocuments className={style.card_icon} />
      </Card>

      <Card className={style.card}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Практические результаты
          </Typography>
          <Box className={style.box}>
            <Box>
              <Typography gutterBottom variant="h4" component="div">
                7
              </Typography>
              <Typography component="div">завершено</Typography>
            </Box>
            <Box>
              <Typography gutterBottom variant="h4" component="div">
                12
              </Typography>
              <Typography component="div">общее</Typography>
            </Box>
            <Box>
              <Typography gutterBottom variant="h4" component="div">
                0
              </Typography>
              <Typography component="div">просрочено</Typography>
            </Box>
          </Box>
          <Typography
            gutterBottom
            variant="p"
            component="div"
            className={style.sb_title}
          >
            Обновить оценку
          </Typography>
        </CardContent>
        <FaThList className={style.card_icon} />
      </Card>

      <Card className={style.card}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Заинтересованные стороны
          </Typography>
          <Typography gutterBottom variant="h4" component="div">
            2535
          </Typography>
          <Typography
            gutterBottom
            variant="p"
            component="div"
            className={style.text}
          >
            <RiLoader3Fill className={style.txt_card_icon} />
            матрицы стеков
          </Typography>
        </CardContent>
        <FiUsers className={style.card_icon} />
      </Card>

      <Card className={style.card}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Изменение воздействия
          </Typography>
          <Typography gutterBottom variant="h4" component="div">
            15
          </Typography>
          <Typography
            gutterBottom
            variant="p"
            component="div"
            className={style.text}
          >
            <RiLoader3Fill className={style.txt_card_icon} />
            тепловая карта влияния
          </Typography>
        </CardContent>
        <FaDownload className={style.card_icon} />
      </Card>

      <Card className={style.card}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Риски
          </Typography>
          <Box className={style.box}>
            <Box>
              <Typography gutterBottom variant="h4" component="div">
                2
              </Typography>
              <Typography component="div">закрыто</Typography>
            </Box>
            <Box>
              <Typography gutterBottom variant="h4" component="div">
                6
              </Typography>
              <Typography component="div">общее</Typography>
            </Box>
            <Box>
              <Typography gutterBottom variant="h4" component="div">
                4
              </Typography>
              <Typography component="div">открыто</Typography>
            </Box>
          </Box>
          <Typography
            gutterBottom
            variant="p"
            component="div"
            className={style.text}
          >
            <RiLoader3Fill className={style.txt_card_icon} />
            показатели рисков
          </Typography>
        </CardContent>
        <AiFillWarning className={style.card_icon} />
      </Card>

      <Card className={style.card}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Деятельность
          </Typography>
          <Box className={style.box}>
            <Box>
              <Typography gutterBottom variant="h4" component="div">
                2
              </Typography>
              <Typography component="div">закрыто</Typography>
            </Box>
            <Box>
              <Typography gutterBottom variant="h4" component="div">
                38
              </Typography>
              <Typography component="div">общее</Typography>
            </Box>
            <Box>
              <Typography gutterBottom variant="h4" component="div">
                2
              </Typography>
              <Typography component="div">открыто</Typography>
            </Box>
          </Box>
          <Typography
            gutterBottom
            variant="p"
            component="div"
            className={style.text}
          >
            <RiLoader3Fill className={style.txt_card_icon} />
            тепловая карта влияния
          </Typography>
        </CardContent>
        <TiDeleteOutline className={style.card_icon} />
      </Card>
    </div>
  );
}
