import React, { Component } from 'react';
import { convertBytes } from './helpers';
import moment from 'moment'

class Main extends Component {

  render() {
    return (
		<div className="container-fluid mt-5 text-center">
			<div className="row">
				<main
					role="main"
					className="col-lg-12 ml-auto mr-auto"
					style={{ maxWidth: "1024px" }}
				>
					<div className="content">
						<div
							className="card mb-3 mx-auto bg-light"
							style={{ maxWidth: "512px" }}
						>
							<h6 className="text-white bg-secondary p-3 ">
								<b>Upload Exam Paper</b>
							</h6>
							<form
								onSubmit={(event) => {
									event.preventDefault();
									const description =
										this.fileDescription.value;
									this.props.uploadFile(description);
								}}
							>
								<div className="form-group p-3 pb-0 mb-0">
									<input
										id="fileDescription"
										type="text"
										ref={(input) => {
											this.fileDescription = input;
										}}
										className="form-control p-3"
										placeholder="Enter Subject Details"
										required
									/>
								</div>
								<input
									type="file"
									onChange={this.props.captureFile}
									className="text-dark mb-3"
								/>
								<button
									type="submit"
									className="btn-secondary btn-block pt-2 pb-2"
								>
									<b>Upload Securely</b>
								</button>
							</form>
						</div>
						<p>&nbsp;</p>
						<table
							className="table-sm table-bordered  "
							style={{ width: "1000px", maxHeight: "450px" }}
						>
							<thead style={{ fontSize: "15px" }}>
								<tr className="bg-secondary text-white">
									<th scope="col" style={{ width: "10px" }}>
										S. No.
									</th>
									<th scope="col" style={{ width: "200px" }}>
										File Name
									</th>
									<th scope="col" style={{ width: "230px" }}>
										Subject Details
									</th>
									<th scope="col" style={{ width: "120px" }}>
										File Type
									</th>
									<th scope="col" style={{ width: "90px" }}>
										File Size
									</th>
									<th scope="col" style={{ width: "90px" }}>
										Date Uploaded
									</th>
									{/* <th scope="col" style={{ width: '120px'}}>uploader/view</th> */}
									<th scope="col" style={{ width: "120px" }}>
										View File
									</th>
								</tr>
							</thead>
							{this.props.files.map((file, key) => {
								return (
									<thead
										style={{ fontSize: "12px" }}
										key={key}
									>
										<tr>
											<td>{file.fileId}</td>
											<td>{file.fileName}</td>
											<td>{file.fileDescription}</td>
											<td>{file.fileType}</td>
											<td>
												{convertBytes(file.fileSize)}
											</td>
											<td>
												{moment
													.unix(file.uploadTime)
													.format("h:mm:ss A M/D/Y")}
											</td>
											{/* <td>
                          <a
                            href={"https://etherscan.io/address/" + file.uploader}
                            rel="noopener noreferrer"
                            target="_blank">
                            {file.uploader.substring(0,10)}...
                          </a>
                         </td> */}
											<td>
												<a
													href={
														"https://ipfs.infura.io/ipfs/" +
														file.fileHash
													}
													rel="noopener noreferrer"
													target="_blank"
												>
													{file.fileHash.substring(
														0,
														10
													)}
													...
												</a>
											</td>
										</tr>
									</thead>
								);
							})}
						</table>
					</div>
				</main>
			</div>
		</div>
	);
  }
}

export default Main;