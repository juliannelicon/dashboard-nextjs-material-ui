import Image from 'next/image';

import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';

import Title from '../Title';

const myLoader = ({ src, width }: { src: string; width: number }) => {
  return `${src}?w=${width}&q=${75}`;
};

export default function Noticias() {
  return (
    <>
      <Title title="Notícias" titleButton="Todas Notícias" />

      <Box display="flex" flexDirection="column">
        <Image
          loader={myLoader}
          src="/image.jpg"
          alt="imagem"
          objectFit="cover"
          width={200}
          height={200}
        />
        <Typography fontWeight="bold" marginTop={1} marginBottom={2}>
          Título da notícia com no máximo 2 linha
        </Typography>
      </Box>

      <List>
        <Divider variant="inset" component="li" sx={{ ml: 0 }} />
        {[1, 2, 3].map(noticia => (
          <ListItem key={noticia} disablePadding>
            <ListItem
              button
              disableGutters
              divider
              title="Título da notícia com no máximo 2 linha"
            >
              <ListItemText primary="Título da notícia com no máximo 2 linha" />
            </ListItem>
          </ListItem>
        ))}
      </List>
    </>
  );
}
