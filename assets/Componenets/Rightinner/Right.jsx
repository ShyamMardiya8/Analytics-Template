import React from 'react'
import './Right.css'
import Region from './Images/region.jpg'
import Avatar from './Images/avatar2.png'
import Avatar1 from './Images/avatar5.png'
import Avatar2 from './Images/avatar6.png'
import Avatar3 from './Images/avatar3.png'
import Avatar4 from './Images/avatar1.png'
import Bookmark from './Images/bookmark.png'
import Chat from './Images/chat.png'
import Group from './Images/group.png'
import Notification from './Images/notification.png'
import Pc from './Images/pc1.png'
import Person from './Images/person.png'
import Share from './Images/share.png'

function Right() {
  return (
    <>
    <div className="RightMain">
      
        <div className="Dname"><img src="" alt=""  className='speed'/>My Dashboard</div>
        <div className="rightmainCont">
            <div className="boxcontainer">
                <div className="box1"></div>
                <div className="box2"></div>
                <div className="box3"></div>
                <div className="box4"></div>
            </div>
        </div>
        <div className="RegionCont">
        <div className="leftRegin">
            <div className="Rname">Regions</div>
            <img src={Region} alt="" className="reginlogo" />
        </div>
        <div className="rightRegin">
            <div className="Feedcontain">Feed</div>
            <div className="feedsouter">
                <div className="feedinner">
                <img src={Person} alt="" className='logop' />
                <div className="firstfeed">New record, over 90 views.</div>
                <div className="firstfeed">10 mins</div>
                </div>
            </div>
            <div className="feedsouter">
                <div className="feedinner">
                <img src={Notification} alt="" className='logop' />
                <div className="firstfeed">Database error.</div>
                <div className="firstfeed">15 mins</div>
                </div>
            </div>
            <div className="feedsouter">
                <div className="feedinner">
                <img src={Group} alt="" className='logop' />        
                <div className="firstfeed">New record, over 40 users.</div>
                <div className="firstfeed">17 mins</div>
                </div>
            </div>
            <div className="feedsouter">
                <div className="feedinner">
                <img src={Chat} alt="" className='logop' />
                <div className="firstfeed">New comments.</div>
                <div className="firstfeed">25 mins</div>
                </div>
            </div>
            <div className="feedsouter">
                <div className="feedinner">
                <img src={Bookmark} alt="" className='logop' />
                <div className="firstfeed">Check transactions.</div>
                <div className="firstfeed">28 mins</div>
            </div>
            
            <div className="feedsouter">
                <div className="feedinner">
                <img src={Pc} alt="" className='logop' />
                <div className="firstfeed"> CPU overload.</div>
                <div className="firstfeed">35 mins</div>
                </div>
            </div>
            <div className="feedsouter">
                <div className="feedinner">
                <img src={Share} alt="" className='logop' />
                <div className="firstfeed">New shares.</div>
                <div className="firstfeed">39 mins</div>
                </div>
            </div>
            </div>
        </div>
    </div>
        <div className="generalcon">
            <div className="genaralname">General Stats</div>
            <div className="vistior">New Visitors</div>
            <div className="lineouter">
                <div className="lineiner"></div>
            </div>
            <div className="vistior">New Users</div>
            <div className="lineouter">
                <div className="lineinero"></div>
            </div>
            <div className="vistior">Bounce Rate</div>
            <div className="lineouter">
                <div className="lineinert"></div>
            </div>
        </div>
        <div className="countrymain">Countries
        <table border="1" class="country-table">
    <thead>
      <tr>
        <th>Country</th>
        <th>Percentage</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>United States</td>
        <td>65%</td>
      </tr>
      <tr>
        <td>UK</td>
        <td>15.7%</td>
      </tr>
      <tr>
        <td>Russia</td>
        <td>5.6%</td>
      </tr>
      <tr>
        <td>Spain</td>
        <td>2.1%</td>
      </tr>
      <tr>
        <td>India</td>
        <td>1.9%</td>
      </tr>
      <tr>
        <td>France</td>
        <td>1.5%</td>
      </tr>
    </tbody>
  </table>
  <button className="oterC">Other Countries</button>
  </div>
  <div className="useconat">
    <div className="username">Recent Users</div>
    <div className="boxuserconta">
        <div className="mikeOne">
            <img src={Avatar} alt="" className='avatarLogo'/>
            <div className="nameMike">Mike</div>
        </div>
        <div className="mikeOne">
            <img src={Avatar1} alt="" className='avatarLogo'/>
            <div className="nameMike">Jill</div>
        </div>
        <div className="mikeOne">
            <img src={Avatar2} alt="" className='avatarLogo'/>
            <div className="nameMike">Jane</div>
        </div>
    </div>
  </div>
  <div className="Commentsection">
    <div className="commentname">Recent Comments</div>
    <div className="maincoment">
        <img src={Avatar3} alt="" className="logosuit" />
        <div className="comentdesc">John <span className="date">sep 29, 2014, 9:12 PM</span></div>
    </div>
    <div className="maincoment">
        <img src={Avatar4} alt="" className="logosuit" />
        <div className="comentdesc">John <span className="date">sep 29, 2014, 9:12 PM</span></div>
      </div>
  </div>
  <div className="Demograpy">
    <div className="innerdemog">
      <h5 className="demoname">Demographic</h5>
      <p>Language</p>
      <p>Country</p>
      <p>City</p>
    </div>
    <div className="innerdemog">
      <h5 className="demoname">System</h5>
      <p>Browser</p>
      <p>Os</p>
      <p>More</p>
    </div>
    <div className="innerdemog">
      <h5 className="demoname">Target</h5>
      <p>Users</p>
      <p>Active</p>
      <p>Geo</p>
      <p>interest</p>
    </div>
  </div>
  <div className="footer">
    <div className="footername">FOOTER</div>
    <div className="powered">Powered by <a href="https://www.w3schools.com/w3css/default.asp" className='w3' target="_blank">W3.css</a></div>
  </div>
    </div>
    </>
  )
}

export default Right