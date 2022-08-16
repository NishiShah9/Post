import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import ImageBanner from "../Images/banner.svg";
import Button from "@mui/material/Button";
import { useNavigate, useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";
import MetaData from "./Common/MetaData";
import { useForm, Controller } from "react-hook-form";
import { addPost, updatePost } from "../Redux/Actions/PostAction";
import { ROUTES } from "../Utils/Constant";

interface IFormInput {
  title: string;
  body: string;
  userId: number;
  id?: string;
  SetFieldValue: string;
}

const AddPost = () => {
  const navigate = useNavigate();
  const location: any = useLocation();
  const dispatch: any = useDispatch();
  const [isEdit, setIsEdit]: any = useState();

  const {
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();
  const watchAllFields = watch();
  useEffect(() => {
    if (location?.state) {
      let { editPost }: any = location?.state;
      if (editPost !== null) {
        setValue("title", editPost?.title);
        setValue("body", editPost?.body.replace(/[\r\n]/gm, ""));
        setIsEdit(editPost);
      }
    }
  }, [navigate, location?.state, setValue]);

  const onSubmit = async (data: any) => {
    let user: any = JSON.parse(localStorage.getItem("user") || "{}");
    data.userId = user?.id;
    if (isEdit && isEdit?.id) {
      await dispatch(updatePost(isEdit?.id, data));
    } else {
      await dispatch(addPost(data));
    }

    navigate(ROUTES.HOME, { replace: true });
  };
  return (
    <div className="content" data-testid="myroot">
      <MetaData title="Add Post" />

      <div className="left-banner">
        <img src={ImageBanner} height="100%" width="100%" alt="banner" />
      </div>
      <div className="right-banner">
        <h1 className="banner-title">{isEdit ? "Edit Post" : "Add Post"}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name={"title"}
            control={control}
            rules={{
              required: { value: true, message: "Required" },
              maxLength: { value: 100, message: "Max Length" },
            }}
            render={({ field: { onChange, value } }) => (
              <div className="form-div">
                <TextField
                  fullWidth
                  id="title"
                  label="Title"
                  value={value}
                  required
                  onChange={onChange}
                />
                <div className="error-message">
                  {errors?.title && !value && errors?.title?.message}
                </div>
              </div>
            )}
          />
          <Controller
            name={"body"}
            control={control}
            rules={{
              required: { value: true, message: "Required" },
            }}
            render={({ field: { onChange, value } }) => (
              <div className="form-div">
                <TextField
                  multiline
                  fullWidth
                  rows={4}
                  id="body"
                  label="Body"
                  required
                  value={value}
                  onChange={onChange}
                />
                <div className="error-message">
                  {errors?.body && !value && errors?.body?.message}
                </div>
              </div>
            )}
          />
        </form>
        <div className="form-div">
          {watchAllFields && (
            <Button
              data-testid="submit-post"
              disabled={!watch("title" && "body")}
              className="header-button"
              variant="contained"
              fullWidth
              onClick={handleSubmit(onSubmit)}
            >
              {isEdit ? "Edit" : "Add"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddPost;
