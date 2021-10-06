import * as PDFJS from 'pdfjs-dist/build/pdf'
PDFJS.GlobalWorkerOptions.workerSrc =  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS.version}/pdf.worker.min.js`;
import SVAAgreement from '/mentor assets/StudyVillageAgentAgreement.pdf'

import axios from 'axios'

export const CarouselData = [
    {file: SVAAgreement},
    {file: SVAAgreement},
    {file: ""}

]