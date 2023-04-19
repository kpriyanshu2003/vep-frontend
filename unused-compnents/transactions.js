import items from "../src/components/subComponents/transAction-sample.json";
import { Fragment, useState } from "react";

export default function Transaction() {
  const update = (n) => {
    setMain(<UserDetails key={n} />);
  };
  // const [main, setMain] = useState(<TransMain update={update} />);
  const [main, setMain] = useState(<UserDetails key={0} />);
  return (
    <div className="font-raleway w-[85rem] ">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-base text-[#787878]">
          Activities
        </span>
        <div className="flex items-center -ml-20">
          <div className="flex items-center ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.25001 7.30696C9.09001 7.49096 9.00001 7.74496 9.00001 7.99996C9.00001 8.13257 8.94733 8.25974 8.85356 8.35351C8.75979 8.44728 8.63262 8.49996 8.50001 8.49996C8.3674 8.49996 8.24022 8.44728 8.14645 8.35351C8.05269 8.25974 8.00001 8.13257 8.00001 7.99996C8.00001 7.52696 8.16101 7.02996 8.50001 6.64596C8.84701 6.25196 9.36001 5.99996 10 5.99996C10.64 5.99996 11.153 6.25196 11.5 6.64596C11.839 7.03096 12 7.52596 12 7.99996C12 8.48996 11.884 8.86996 11.698 9.18996C11.535 9.46896 11.322 9.68996 11.153 9.86696L11.111 9.90996C10.925 10.105 10.782 10.264 10.677 10.464C10.577 10.655 10.5 10.908 10.5 11.293C10.5 11.4256 10.4473 11.5527 10.3536 11.6465C10.2598 11.7403 10.1326 11.793 10 11.793C9.8674 11.793 9.74022 11.7403 9.64645 11.6465C9.55269 11.5527 9.50001 11.4256 9.50001 11.293C9.50001 10.761 9.61001 10.346 9.79101 9.99996C9.96801 9.66296 10.201 9.41596 10.389 9.21896L10.411 9.19596C10.599 8.99896 10.733 8.85896 10.834 8.68596C10.929 8.52296 11 8.31696 11 7.99996C11 7.74496 10.911 7.48996 10.75 7.30696C10.597 7.13396 10.36 6.99996 10 6.99996C9.64001 6.99996 9.40301 7.13396 9.25001 7.30696ZM10 14.212C10.0941 14.2155 10.1879 14.2001 10.2759 14.1665C10.3639 14.133 10.4442 14.082 10.512 14.0167C10.5798 13.9514 10.6338 13.8731 10.6706 13.7864C10.7075 13.6998 10.7265 13.6066 10.7265 13.5125C10.7265 13.4183 10.7075 13.3251 10.6706 13.2385C10.6338 13.1518 10.5798 13.0735 10.512 13.0082C10.4442 12.9429 10.3639 12.892 10.2759 12.8584C10.1879 12.8249 10.0941 12.8094 10 12.813C9.81436 12.813 9.63631 12.8867 9.50503 13.018C9.37376 13.1493 9.30001 13.3273 9.30001 13.513C9.30001 13.6986 9.37376 13.8767 9.50503 14.0079C9.63631 14.1392 9.81436 14.213 10 14.213V14.212ZM2.00001 9.99996C2.00045 8.25178 2.5735 6.55187 3.63153 5.16021C4.68956 3.76856 6.17431 2.76178 7.8587 2.29386C9.54309 1.82593 11.3344 1.92263 12.9586 2.56915C14.5829 3.21567 15.9506 4.37643 16.8527 5.87389C17.7548 7.37135 18.1415 9.12307 17.9537 10.8611C17.766 12.5992 17.0141 14.2279 15.813 15.4982C14.612 16.7685 13.0279 17.6104 11.3031 17.8951C9.57824 18.1799 7.80762 17.8918 6.26201 17.075L2.62201 17.985C2.53823 18.006 2.45043 18.005 2.36716 17.982C2.28389 17.9591 2.20799 17.9149 2.14686 17.8539C2.08573 17.7929 2.04146 17.717 2.01835 17.6338C1.99524 17.5506 1.99409 17.4628 2.01501 17.379L2.92501 13.738C2.3157 12.5863 1.9981 11.3028 2.00001 9.99996ZM10 2.99996C8.77839 2.99958 7.57794 3.31892 6.51796 3.92622C5.45799 4.53353 4.57541 5.40766 3.95792 6.46173C3.34044 7.51581 3.00957 8.71313 2.99818 9.9347C2.98679 11.1563 3.29529 12.3596 3.89301 13.425C3.95578 13.5361 3.97367 13.667 3.94301 13.791L3.18701 16.813L6.20901 16.057C6.33292 16.0263 6.46386 16.0442 6.57501 16.107C7.50827 16.6298 8.54894 16.9317 9.61709 16.9897C10.6852 17.0476 11.7525 16.86 12.7368 16.4412C13.7211 16.0223 14.5964 15.3835 15.2953 14.5737C15.9943 13.7639 16.4983 12.8047 16.7688 11.7697C17.0392 10.7347 17.0689 9.65154 16.8555 8.60333C16.642 7.55511 16.1912 6.56975 15.5376 5.72293C14.884 4.8761 14.045 4.19034 13.085 3.71831C12.1251 3.24628 11.0697 3.00054 10 2.99996Z"
                fill="#BF13BF"
              />
            </svg>
            <span className="text-[#BF13BF] font-normal text-base">Help</span>
          </div>
          <div className="ml-10 flex items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.33 12.838L17.827 8.41498L17.884 8.34998C17.9684 8.23668 18.0091 8.09674 17.9986 7.95585C17.9881 7.81495 17.9272 7.68257 17.827 7.58298L13.33 3.16198L13.268 3.10898C12.908 2.83898 12.378 3.09898 12.378 3.57798V5.70798L12.153 5.72298C8.59 6.00498 6.503 8.25998 6.005 12.35C5.941 12.875 6.543 13.204 6.933 12.856C8.364 11.578 9.843 10.784 11.378 10.466C11.624 10.415 11.871 10.376 12.12 10.349L12.378 10.326V12.422L12.383 12.504C12.443 12.957 12.992 13.17 13.33 12.838ZM12.226 6.71998L13.378 6.64298V4.60998L16.824 7.99798L13.378 11.388V9.23098L12.022 9.35298H12.014C10.311 9.53598 8.704 10.218 7.187 11.355C7.485 10.016 7.994 9.00898 8.663 8.28798C9.493 7.39298 10.653 6.84498 12.226 6.71898V6.71998ZM5.5 3.99998C4.83696 3.99998 4.20107 4.26337 3.73223 4.73221C3.26339 5.20106 3 5.83694 3 6.49998V14.5C3 15.163 3.26339 15.7989 3.73223 16.2677C4.20107 16.7366 4.83696 17 5.5 17H13.5C14.163 17 14.7989 16.7366 15.2678 16.2677C15.7366 15.7989 16 15.163 16 14.5V13.5C16 13.3674 15.9473 13.2402 15.8536 13.1464C15.7598 13.0527 15.6326 13 15.5 13C15.3674 13 15.2402 13.0527 15.1464 13.1464C15.0527 13.2402 15 13.3674 15 13.5V14.5C15 14.8978 14.842 15.2793 14.5607 15.5606C14.2794 15.8419 13.8978 16 13.5 16H5.5C5.10218 16 4.72064 15.8419 4.43934 15.5606C4.15804 15.2793 4 14.8978 4 14.5V6.49998C4 6.10216 4.15804 5.72063 4.43934 5.43932C4.72064 5.15802 5.10218 4.99998 5.5 4.99998H8.5C8.63261 4.99998 8.75979 4.9473 8.85355 4.85353C8.94732 4.75977 9 4.63259 9 4.49998C9 4.36737 8.94732 4.2402 8.85355 4.14643C8.75979 4.05266 8.63261 3.99998 8.5 3.99998H5.5Z"
                fill="#BF13BF"
              />
            </svg>
            <span className="text-[#BF13BF] font-normal text-base">Share</span>
          </div>
        </div>
      </div>
      <div>{main}</div>
    </div>
  );
}

function TransMain(props) {
  const itemsT = items.transactions.map((i, index) => (
    <div className="grid place-items-center" key={i.key}>
      <div
        className="w-full grid grid-cols-4 w-full text-center items-center justify-evenly font-raleway p-4 whitespace-nowrap"
        onClick={() => props.update(i.key)}
      >
        <div className="flex items-center ml-20">
          <img src="https://picsum.photos/40" alt="" className="rounded-full" />
          <span className="text-base font-semibold ml-4">{i.from}</span>
        </div>
        <div className="text-base font-medium">{i.time}</div>
        <div className="text-base font-semibold">{i.account}</div>
        <div
          className={`text-base font-bold text-[#${
            i.type === "credit" ? "29CC7A" : "333333"
          }]`}
        >
          Amount Here
        </div>
      </div>
      {index === items.transactions.length - 1 ? (
        ""
      ) : (
        <hr className="w-11/12 text-[#DADADA]" />
      )}
    </div>
  ));
  return (
    <Fragment>
      <div className="mt-10 grid gap-5 grid-cols-4 shadow-md text-center w-full rounded-2xl p-3">
        <div className="">From/To</div>
        <div className="">Time & Date</div>
        <div className="">Account</div>
        <div className="">Amount</div>
      </div>
      <div className="overflow-y-scroll h-full">{itemsT}</div>
    </Fragment>
  );
}
function UserDetails(n) {
  return (
    <Fragment>
      <div className="mt-10 shadow-md w-full rounded-2xl p-4">
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-top">
              <span>Transaction ID:{"  "}</span>
              <span className="font-bold">VE123445DSAD123</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-10"
              >
                <path
                  d="M8 2C7.46957 2 6.96086 2.21071 6.58579 2.58579C6.21071 2.96086 6 3.46957 6 4V14C6 14.5304 6.21071 15.0391 6.58579 15.4142C6.96086 15.7893 7.46957 16 8 16H14C14.5304 16 15.0391 15.7893 15.4142 15.4142C15.7893 15.0391 16 14.5304 16 14V4C16 3.46957 15.7893 2.96086 15.4142 2.58579C15.0391 2.21071 14.5304 2 14 2H8ZM7 4C7 3.73478 7.10536 3.48043 7.29289 3.29289C7.48043 3.10536 7.73478 3 8 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V14C15 14.2652 14.8946 14.5196 14.7071 14.7071C14.5196 14.8946 14.2652 15 14 15H8C7.73478 15 7.48043 14.8946 7.29289 14.7071C7.10536 14.5196 7 14.2652 7 14V4ZM4 6C4.00001 5.64894 4.09243 5.30406 4.26796 5.00003C4.4435 4.696 4.69597 4.44353 5 4.268V14.5C5 15.163 5.26339 15.7989 5.73223 16.2678C6.20107 16.7366 6.83696 17 7.5 17H13.732C13.5565 17.304 13.304 17.5565 13 17.732C12.6959 17.9076 12.3511 18 12 18H7.5C6.57174 18 5.6815 17.6313 5.02513 16.9749C4.36875 16.3185 4 15.4283 4 14.5V6Z"
                  fill="#BF13BF"
                />
              </svg>
            </div>
            <div>Completed</div>
          </div>
          <div className="mt-10">
            <span>12:00 PM, 2nd Feb 2022</span>
          </div>
        </div>
        <hr className="mt-10" />
        <div className="grid gap-10 grid-cols-3 grid-rows-2 text-center">
          <div>Paid to @saiswarupchakra</div>
          <div>From</div>
          <div>Amount Paid:</div>
          <div>Sai Swarup Chakra</div>
          <div>$ USD Wallet </div>
          <div>$ 999.00</div>
        </div>
        <hr className="mt-10" />
        <div>
          <span>Message</span>
          <br />
          <br />
          <span>Bussiness dealings</span>
        </div>
      </div>
    </Fragment>
  );
}
