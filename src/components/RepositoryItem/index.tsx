import React from "react";

import { Repository } from "../../store/modules/repositories/types";

interface OwnProps {
  repository: Repository;
}

function RepositoryItem({ repository }: OwnProps) {
  return <div>{repository.name}</div>;
}

export default RepositoryItem;
