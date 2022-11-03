import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "./Cards.css";
import moment from "moment";
import { toast } from "react-toastify";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";

function Cards() {
  const vacation = useLocation();
  console.log(vacation);

  const [chnBtn, setChnBtn] = useState(false);
  const [borrowed, setBorrowed] = useState([]);

  const [borrow, setBorrow] = useState([]);
  // const dispatch=useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:3001/borrowed")
      .then((res) => {
        setBorrow(res.data);
        // dispatch(pending(res.data))
      })
      .catch((err) => console.log(err));
    // runPenalty()
  }, []);

  let currDate = moment();

  let newDate = moment().add(5, "days");
  // let nDate = moment(currDate, "DD-MM-YYYY").add(-20, 'days');

  const [user, setUser] = useState([]);

  // local storage
  let localId = JSON.parse(localStorage.getItem("loginId"));

  let empid = localId.empid;
  console.log(empid);
  useEffect(() => {
    axios.get("http://localhost:3001/user").then((res) => {
      let filtered = res.data.find((val) => val.empid == empid);
      setUser(filtered);
    });
  }, []);
  // console.log(user)


  // useEffect(()=>{
  //   runPenalty()
  // })

  // //PenaltyFunc

  // let penalty = null;

  // const callFunc = (d, index) => {
  // //   setBorrowed({...borrow,isPenalty:penalty})
  //        var putState = {
  //                       ...d,
  //                       books : {...d.books, isPenalty : penalty}
  //                       }

  //   axios.put(`http://localhost:3001/borrowed/${d.id}`, putState).then((res) => console.log(res.data))
  // }

  // const runPenalty =() =>
  // {
  // borrow.map((d, index) => {

  //   let currDate2 = moment()

  //   // console.log(currDate2);

  //   // console.log("check", moment(currDate2).isBefore(d.books.expiryDate))

  //   if(moment(currDate2).isAfter(d.books.expiryDate)) {
  //       penalty = true

  //       // console.log("trueeeee1")
  //       callFunc(d, index)
  //       // console.log('penalty',penalty)
  //       // return console.log("trueeeee2")
  //   } else {
  //       penalty = false
  //       callFunc(d, index)
  //       // console.log("falseeee1");
  //       // console.log('penalty',penalty)

  //       // return console.log("falseeee2")

  //   }

  // })
  // }

  const navigate = useNavigate();

  // for confirm dialog box
  const [visible, setVisible] = useState(false);
  const accept = () => {
    postBorrow(vacation.state);
  };

  const reject = () => {
    setVisible(!visible);
  };

  const confirm1 = () => {
    confirmDialog({
      message: "Are you sure you want to proceed?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept,
      reject,
    });
  };

  // 
  const postBorrow = (isbn) => {
    const borrow = {
      empid: user.empid,
      empname: user.empname,
      books: {
        ...isbn,
        isPending: true,
        takenDate: currDate,
        expiryDate: newDate,
      },
    };

    console.log(borrow);

    axios
      .post("http://localhost:3001/borrowed", borrow)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    toast.success("Borrowed");
    setChnBtn(true);

    navigate(-1);
  };

  // For changing borrow button

  let fborrow = borrow.find((val) => {
    return empid == val.empid && vacation.state.ISBN == val.books.ISBN;
  });
  console.log(fborrow);

  // if(fborrow?.empid == empid && fborrow.books.ISBN == vacation.state.ISBN){
  //   console.log("true")
  // }

  return (
    <>
      <div className="body mt-5">
        <div className="cover">
          <div className="book">
            <img id="image" alt="bookcover" src={vacation.state.imgUrl} />
            <div id="page_layout" className="text-center">
              <p className="page_title mt-5">{vacation.state.title}</p>
              <p className="page_author">{vacation.state.Author}</p>
              <p className="page_blockquote mt-5">{vacation.state.desc}</p>
              <div className="footer d-flex justify-content-around mt-5">
                <p className="page_id mt-5">ISBN : {vacation.state.ISBN}</p>
                <p className="page_year mt-5">{vacation.state.published}</p>
              </div>

              {fborrow?.empid == empid &&
              fborrow.books.ISBN == vacation.state.ISBN ? (
                <div>
                  <button type="button" class="btn btn-primary" disabled>
                    In use
                  </button>
                </div>
              ) : (
                <div onClick={confirm1} icon="pi pi-check" label="Confirm">
                  <button type="button" class="btn btn-primary">
                    Borrow
                  </button>
                </div>
              )}

              {/* confirm dialog */}
              <ConfirmDialog />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
