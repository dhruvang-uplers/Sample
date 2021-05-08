import React, { useEffect, useState } from "react";

import { db } from "../Firebase/Firebase";
import BirthdayCard from "./Cards/BirthdayCard";

export default function View(props) {
  const { id } = props.match.params;
  const [userData, setUserData] = useState();
  useEffect(() => {
    var docRef = db.collection("Invitation").doc(id);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setUserData(doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document! ");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  return (
    <>
      <BirthdayCard userData={userData}></BirthdayCard>
    </>
  );
}
