import React, { Fragment } from "react";
import icon from "../images/icon.svg";
import succ from "../images/signup-acc-success.svg";
export default function Success() {
  return (
    <Fragment>
      <div className="ml-24 relative border border-gray-300">
        <div className="absolute top-2 left-7 flex items-center">
          <img src={icon} alt="" />
          <svg
            width="60"
            height="30"
            viewBox="0 0 60 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.70579 21.9736L0.193176 0.78418H5.68316L10.9377 16.9331L16.1922 0.78418H21.6822L14.1696 21.9736H7.70579Z"
              fill="#CE0B9F"
            />
            <path
              fillRule="evenodd"
              clip-rule="evenodd"
              d="M30.5575 22.1878C28.1015 22.1878 26.0895 21.4012 24.5217 19.8227C22.9513 18.2388 22.1674 16.1386 22.1674 13.5194C22.1674 10.9028 22.9432 8.81862 24.5003 7.26955C26.0628 5.72315 28.0801 4.94727 30.5575 4.94727C33.0323 4.94727 35.0843 5.71512 36.711 7.24815C38.343 8.77581 39.1617 10.8974 39.1617 13.6157C39.1617 14.1936 39.1216 14.7367 39.044 15.2423H27.454C27.553 15.9861 27.8848 16.5961 28.4493 17.0723C29.0111 17.5432 29.6184 17.7787 30.2686 17.7787C30.9241 17.7787 31.4137 17.7144 31.7347 17.586C32.0558 17.4523 32.2912 17.3185 32.441 17.19C32.5962 17.0616 32.7942 16.8449 33.0296 16.5372H38.6159C38.137 18.2281 37.1712 19.5952 35.7158 20.636C34.2657 21.6714 32.548 22.1878 30.5575 22.1878ZM33.7894 12.0104C33.7092 11.2265 33.3667 10.5871 32.7621 10.0948C32.1547 9.60252 31.4377 9.35638 30.611 9.35638C29.7896 9.35638 29.0967 9.60252 28.5349 10.0948C27.9704 10.5871 27.6172 11.2265 27.4754 12.0104H33.7894Z"
              fill="#CE0B9F"
            />
            <path
              fillRule="evenodd"
              clip-rule="evenodd"
              d="M53.1401 16.6442C53.8811 15.9326 54.2531 14.9106 54.2531 13.5836C54.2531 12.2566 53.8811 11.2292 53.1401 10.5015C52.3963 9.77375 51.5402 9.40989 50.5716 9.40989C49.6085 9.40989 48.7524 9.77107 48.0032 10.4908C47.2595 11.2051 46.8903 12.2245 46.8903 13.5515C46.8903 14.8785 47.2595 15.9058 48.0032 16.6336C48.7524 17.3559 49.6085 17.7144 50.5716 17.7144C51.5402 17.7144 52.3963 17.3586 53.1401 16.6442ZM46.8903 7.33376C48.038 5.74455 49.6834 4.94727 51.8237 4.94727C53.9694 4.94727 55.7861 5.75792 57.2709 7.37657C58.7611 8.99788 59.5076 11.066 59.5076 13.5836C59.5076 16.0958 58.7611 18.1586 57.2709 19.7692C55.7861 21.3825 53.9855 22.1878 51.8666 22.1878C49.753 22.1878 48.0942 21.2995 46.8903 19.523V30H41.732V5.12921H46.8903V7.33376Z"
              fill="#CE0B9F"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-center mt-28 font-raleway">
        <div className="text-center">
          <div>
            <span className="font-bold text-3xl">
              Account created Successfully!!!
            </span>
            <br />
            <br />
            <span className="font-normal text-base">
              You can login to your account through the credentials created.
            </span>
          </div>
          <div className="mt-8">
            <span className="mt-8 uppercase font-medium text-[#BF32BF]">
              login now
            </span>
            <br />
            <img src={succ} alt="" className="w-fit mx-auto" />
          </div>
          <div className="flex items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.492 8.91C10.4697 8.78705 10.4023 8.6769 10.3028 8.60122C10.2034 8.52554 10.0793 8.48983 9.95482 8.50112C9.83039 8.51241 9.71469 8.56988 9.63051 8.66222C9.54633 8.75455 9.49977 8.87505 9.5 9V13.502L9.508 13.592C9.53026 13.7149 9.59775 13.8251 9.69717 13.9008C9.79659 13.9765 9.92074 14.0122 10.0452 14.0009C10.1696 13.9896 10.2853 13.9321 10.3695 13.8398C10.4537 13.7475 10.5002 13.6269 10.5 13.502V9L10.492 8.91ZM10.799 6.75C10.799 6.55109 10.72 6.36032 10.5793 6.21967C10.4387 6.07902 10.2479 6 10.049 6C9.85009 6 9.65932 6.07902 9.51867 6.21967C9.37802 6.36032 9.299 6.55109 9.299 6.75C9.299 6.94891 9.37802 7.13968 9.51867 7.28033C9.65932 7.42098 9.85009 7.5 10.049 7.5C10.2479 7.5 10.4387 7.42098 10.5793 7.28033C10.72 7.13968 10.799 6.94891 10.799 6.75ZM18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10ZM3 10C3 9.08075 3.18106 8.1705 3.53284 7.32122C3.88463 6.47194 4.40024 5.70026 5.05025 5.05025C5.70026 4.40024 6.47194 3.88463 7.32122 3.53284C8.1705 3.18106 9.08075 3 10 3C10.9193 3 11.8295 3.18106 12.6788 3.53284C13.5281 3.88463 14.2997 4.40024 14.9497 5.05025C15.5998 5.70026 16.1154 6.47194 16.4672 7.32122C16.8189 8.1705 17 9.08075 17 10C17 11.8565 16.2625 13.637 14.9497 14.9497C13.637 16.2625 11.8565 17 10 17C8.14348 17 6.36301 16.2625 5.05025 14.9497C3.7375 13.637 3 11.8565 3 10Z"
                fill="#333333"
              />
            </svg>
            <span>
              {" "}
              Account verification is pending, you can verify your account
              through the mail sent to your email.
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
