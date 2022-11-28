import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { css } from "@emotion/react";
import { DotLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import MyPagination from "../../../components/MyPagination";
import StaffTable from "./StaffTable";
import { fetchStaffs } from "../../../store/actions/adminActions";

const override = css`
  display: block;
  margin: auto auto;
  border-color: #696cff;
`;

function Index() {
  const [currPage, setCurrPage] = React.useState(1);
  const [search, setSearch] = React.useState("");
  const { staffs, isLoading } = useSelector((state) => state.staff);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchStaffs(1));
  }, [dispatch]);

  const afterPageClicked = (page_num) => {
    setCurrPage(page_num);
    dispatch(fetchStaffs(page_num));
  };

  const navigate = useNavigate();

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      //   searchMember();
    }
  };
  const searchStaff = () => {
    if (search.trim()) {
      //   dispatch(getStaffsBySearch({ search }));
      navigate(`/dashboard/staffs/search?searchQuery=${search || "none"}`);
    } else {
      navigate("/dashboard/staffs");
    }
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      {isLoading ? (
        <DotLoader
          color="#696cff"
          loading={isLoading}
          css={override}
          size={150}
        />
      ) : (
        <>
          <div className="align-items-center m-3">
            <div className="d-flex align-items-center">
              <input
                type="text"
                className="form-control"
                name="email-username"
                placeholder="search staff by name"
                onKeyDown={handleKeyPress}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-outline-secondary  m-2"
                onClick={searchStaff}
              >
                <i className="bx bx-search fs-4 lh-0" />
              </button>
            </div>
          </div>
          <MyPagination
            currentPage={currPage}
            pageClicked={(ele) => {
              afterPageClicked(ele);
            }}
          >
            <StaffTable staffs={staffs} />
          </MyPagination>
        </>
      )}
    </div>
  );
}

export default Index;
