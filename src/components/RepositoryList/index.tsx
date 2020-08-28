import React from "react";

import { bindActionCreators, Dispatch } from "redux";

import { ApplicationState } from "../../store";
import { Repository } from "../../store/modules/repositories/types";
import * as RepositoriesActions from "../../store/modules/repositories/actions";
import { connect } from "react-redux";

import RepositoryItem from "../RepositoryItem";

interface StateProps {
  repositories: Repository[];
}

interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps & DispatchProps;

class RepositoryList extends React.Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    const { repositories } = this.props;

    return (
      <ul>
        {repositories.map((repository) => (
          // <li>{repository.name}</li>
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
