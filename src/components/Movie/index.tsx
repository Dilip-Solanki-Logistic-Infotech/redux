import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  clearState,
  getList,
  getMoviesList,
  getIsLoading,
  getMovieById,
  getIsOpenModal,
  getDetails,
  closeDetails,
} from "../../features/movie/movieSlice";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalTitle,
} from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";

const Movie = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(getList);
  const details = useAppSelector(getDetails);
  const isLoading = useAppSelector(getIsLoading);
  const isOpenModal = useAppSelector(getIsOpenModal);
  const [movieId, setMovieId] = useState("");

  useEffect(() => {
    dispatch(getMoviesList());
    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);

  useEffect(() => {
    if (movieId) {
      dispatch(getMovieById(movieId));
    } else {
      dispatch(closeDetails());
    }
  }, [dispatch, movieId]);

  const getShortOverview = (overview: string) => {
    const length = 100;
    const overviewLength = overview.length;
    let shortOverview = overview;
    if (overviewLength > length) {
      shortOverview = `${overview.substring(0, length)}...`;
    }
    return shortOverview;
  };

  const openDetails = (id: string) => () => {
    setMovieId(id);
  };

  const closeModal = () => {
    setMovieId("");
  };

  return (
    <>
      <div className="pt-3 pb-2 mb-3 border-bottom">
        <h3>Movie</h3>
      </div>
      {movies.length ? (
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {movies.map((movie: any, index) => (
            <div className="col" key={index}>
              <div className="card mt-10">
                <img
                  src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                  title={movie.title}
                  alt={movie.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">
                    {getShortOverview(movie.overview)}
                  </p>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={openDetails(movie.id)}
                  >
                    More Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-1 g-1">
          <div className="text-center">
            {isLoading ? "Please wait..." : "Data not found"}
          </div>
        </div>
      )}
      <Modal
        show={isOpenModal && Boolean(Object.keys(details).length)}
        onHide={closeModal}
        size="lg"
        centered
      >
        <ModalHeader closeButton>
          <ModalTitle>{details.title}</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <div className="row">
            <div className="col-md-4">
              <div className="text-center">
                <img
                  className="img-thumbnail w-100"
                  src={"https://image.tmdb.org/t/p/w500/" + details.poster_path}
                  alt={details.title}
                />
              </div>
            </div>
            <div className="col-md-8">
              <p className="text-justify">{details.overview}</p>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            variant="secondary"
            className="btn-danger"
            onClick={closeModal}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Movie;
