
import React, { useState } from "react";
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';



const drawerWidth = 320;
function Sidebar({ data,chars,setChar  }) {
console.log("data ::", data)
console.log("chars ::", chars)
  
 
  return (
    <div> 
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: '#EAEAEA'
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <Button variant="contained" className='button-para' data-toggle="modal" data-target="#rewrite">
          Paraphrase
        </Button>
        <Link   style={{ textDecoration: 'none' }}>
          <Typography variant="h6" sx={{ m: 7 }}>Browse Templates</Typography>
        </Link>
        <div style={{ marginLeft: '35px' }}>
          <p className='read'>Readibility</p>
          <p className='grade'>Grade 6</p>
          <p className='grade' style={{ color: '#84899D' }}>Good</p>
        </div>

        <List sx={{ maxWidth: 360, bgcolor: 'background.paper', margin: '19px 30px', paddingTop: '0px', paddingBottom: '0', borderRadius: '10px', textAlign: 'left', lineHeight: '14px' }}>
          <p className='frame-open'><span className='frame'>6</span> seconds</p>
          <p className='frame-open'><span className='frame'>{data.words}</span> words</p>
          <p className='frame-open'><span className='frame'>{chars}</span> characters</p>
        </List>
        <div className='paragraph'>
          <span
            className='number-size'
          >
            {data.adverbs}
          </span>
          <span className='format-text'>adverbs, meeting the goal of {data.adverbs} or fewer.</span>
        </div>
        <div className='paragraph' style={{ background: '#C7FFDD' }}>
          <span
            className='number-size'
          >
            {data.passiveVoice}
          </span>
          <span className='format-text'>use of passive voice, meeting the goal of {data.passiveVoice} or fewer.</span>
        </div>
        <div className='paragraph' style={{ background: '#EDDFFF' }}>
          <span
            className='number-size'
          >
            1
          </span>
          <span className='format-text'> phrase has a simpler alternative.</span>
        </div>
        <div className='paragraph' style={{ background: '#FFEFD0' }}>
          <span
            className='number-size'
          >
            {data.hardSentences}
          </span>
          <span className='format-text'>of {data.hardSentences} sentences is hard to read.</span>
        </div>
        <div className='paragraph' style={{ background: '#FFD9D9' }}>
          <span
            className='number-size'
          >
           {data.veryHardSentences}
          </span>
          <span className='format-text'>of {data.veryHardSentences} sentences is very hard to read.</span>
        </div>
      </Drawer>
      <div class="modal fade" id="rewrite" tabindex="-1" role="dialog" aria-labelledby="rewriteLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="rewriteLabel">Rewrite this</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body pb-5">
              <h3 className="read_write">I made a website where you have to guest if a Trump tweet is real or fake. I compiled 40 crazy real tweets and 40 fake tweets. It’s surprisingly hard!</h3>
              <div className="choose_text mb-3">
                <h2>As a Reddit title for </h2>
                <div class="dropdown entre">
                  <button class="btn btn-outline dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    r/entrepreneur
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;