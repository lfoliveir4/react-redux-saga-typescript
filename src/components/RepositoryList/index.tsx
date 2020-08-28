import React from "react";

import { bindActionCreators, Dispatch } from "redux";
import { ApplicationState } from "../../store";
import { Repository } from "../../store/modules/repositories/types";
import * as RepositoriesActions from "../../store/modules/repositories/actions";
import { connect } from "react-redux";

import RepositoryItem from "../RepositoryItem";

import * as Styles from "./styles";

interface StateProps {
  repositories: Repository[];
}

interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps & DispatchProps;

const RepositoryList = (props: Props) => {
  React.useEffect(() => {
    props.loadRequest();
  }, []);

  return (
    <Styles.Container>
      <p>Lista dos meus repos: lfoliveira</p>

      <ul>
        {props.repositories?.map((repository) => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    </Styles.Container>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
