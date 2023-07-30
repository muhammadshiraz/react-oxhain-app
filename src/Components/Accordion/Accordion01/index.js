import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    OxhainAccordion,
} from './Accordion01.styled';

export default function Accordion01({title, content, id}) {
  return (
    <OxhainAccordion className='flex items-start font-prompt w-full border-bottom-line-10 pb-2 mb-2'>
      <Accordion className='w-full'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='svg-fill-2' />}
          aria-controls={`panel${id}a-content`}
          id={`panel${id}a-header`}
        >
          <p className='text5 text-xl font-normal'>{title}</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className='text-left text-sm font-light text4 pb-2'>{content}</p>
        </AccordionDetails>
      </Accordion>
    </OxhainAccordion>
  );
}