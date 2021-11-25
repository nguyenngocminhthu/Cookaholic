import React, { useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Details.css';
import ScrollArea from 'react-scrollbar';


const RecipesDetail = (props) => {
  const { recipe } = props
  const [expanded, setExpanded] = React.useState(false);

  useEffect(() => {
    console.log("log at => Recipes Detail ==> recipe: ", recipe)
  }, [recipe])
  useEffect(() => {
    console.log("log at => Recipes Detail ==> recipe: ", recipe)
  }, [])
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const recipeIngre = recipe.ingre || []

  const renderListIngre = recipeIngre.map((vl, idx) => {
    return (
      <div key={idx}>
        <div>
          <p>{vl}</p>
        </div>
      </div>
    )
  })

  const recipeDirection = recipe.directions || []

  const renderListDirection = recipeDirection.map((vl, idx) => {
    return (
      <div key={idx}>
        <div>
          <p>{vl}</p>
        </div>
      </div>
    )
  })


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
            <Typography sx={{ color: 'text.secondary' }}>{recipe.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ScrollArea className="area2" smoothScrolling >
                <div className="items">{recipe.title}</div>
              </ScrollArea>

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

              <ScrollArea className="area2" smoothScrolling >
                <div className="items">
                  {renderListIngre}

                </div>
              </ScrollArea>
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
              <ScrollArea className="area2" smoothScrolling >
                {renderListDirection}
              </ScrollArea>
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