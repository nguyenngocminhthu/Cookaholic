import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Details.css';

const RecipesDetail = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
           <div className="information">
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Giới thiệu món ăn
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Món ngon miền Bắc</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Nguồn gốc của món Phở - Phở thường được cho là định hình vào đầu thế kỷ 20. Về nơi xuất hiện đầu tiên ở Việt Nam, 
          người ta có hai quan điểm khác nhau là: Nam Định và Hà Nội, đây cũng là nơi làm cho món ăn này trở nên nổi tiếng.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Nguyên liệu chế biến</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          Nguyên liệu (3-4 bát phở)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           
- 0.5kg đuôi bò.

- 0.5kg sườn bò.

- 0.5kg bắp bò (hoặc thay bằng thịt nạm, gầu tùy thích) thịt bò tái (tùy thích).

- 1/4 củ hành tây to.

- 1 củ gừng (to khoảng gấp rưỡi ngón tay cái).

- 5-6 củ hành khô (hành hương, có thể thay bằng hành tím).

- 1 thìa café hạt mùi già (không bắt buộc).

- 5-6 rễ cây mùi.

- 1 thảo quả.

- 2 hoa hồi.

- 1 thanh quế nhỏ.

- 2 lóng mía (mỗi lóng dài khoảng 10cm).

- Bột nêm hoặc muối.

- Bánh phở, hành, mùi thái nhỏ ,tương ớt, chanh.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          Cách làm
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            ...
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          - Đuôi và sườn bò chặt miếng nhỏ.

- Thịt bắp bò để nguyên miếng.

- Pha nước muối loãng (mặn vừa như nấu canh là được), ngâm đuôi bò, sườn bò và thịt bò trong khoảng 2h. Thịt bò giờ không được sạch lắm, nhất là phần đuôi có thể còn có mùi hôi, việc ngâm muối sẽ giúp cho thịt “sạch” hơn, khi ăn cũng mềm ngon hơn.

- Trong lúc đợi ngâm thịt thì chuẩn bị các nguyên liệu khác:

 + Hành tây, hành khô (hành hương), gừng, mía để nguyên vỏ, nướng chín thơm. Nướng trực tiếp trên bếp điện, để lửa vừa để các thứ hành gừng có thể chín bên trong mà bên vỏ ngoài không bị cháy quá mức. Sau khi nướng xong thì cạo sạch vỏ gừng và hành (mía để nguyên vỏ).

  + Rửa lại tất cả cho sạch. Hành tây có thể bổ đôi hoặc bổ tư.

  + Gừng đập dập hoặc thái lát.

  + Rễ mùi rửa sạch.

  + Hoa hồi, quế, thảo quả, hạt mùi (nếu có) cho lên chảo rang ở lửa vừa đến khi dậy mùi thơm. Cho tất cả vào túi vải, buộc chặt miệng.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Yêu cầu thành phẩm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          - Nước phở trong, ngọt xương, thơm gừng và gia vị phở.

- Bánh phở dẻo, thịt nạm chín bùi và thơm, thịt tái ngọt xốp, mỡ gàu béo giòn. Nước dùng thanh, vị ngọt sắc và nóng lâu.


          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
        </>
    );
}

export default RecipesDetail;