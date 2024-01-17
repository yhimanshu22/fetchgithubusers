const GithubUsers = ({ users }) => {
    return (
        <div className="container">
            <h1 className="text-center my-4">List of Github Users</h1>
            <div className="row">
                {users.map((user) => {
                    return (
                        <div key={user.id} className="col-md-4 mb-4">
                            <div className="card text-center">
                                <div className="card-header">
                                    {user.name}
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Company: {user.company?.name || 'N/A'}</p>
                                    <p className="card-text">Email: {user.email || 'N/A'}</p>
                                    <p className="card-text">Website: {user.website || 'N/A'}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default GithubUsers;


