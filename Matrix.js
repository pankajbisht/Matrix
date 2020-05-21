class Matrix extends Util {
	
	constructor(rows, cols) {
		super();
		this.rows = rows;
		this.cols = cols;
		this.matrix = [];
	}

	get() {
		return this.matrix;
	}

	create(type) {

		for (var i = 0; i < this.rows; i++) {

			this.matrix[i] = [];
			
			for (var j = 0; j < this.cols; j++) {

				if (type == "Null") {
					this.matrix[i][j] = 0;
				} else if (type == "Identity") {

				} else {
					this.matrix[i][j] = this.rand(10);
				}
			}
		}
	}

	add(n) {

		var self = this;

		if (n instanceof Matrix) {

			self.rC(self.rows, function (i) {
				
				self.rC(self.cols, function (j) {
					self.matrix[i][j] += n.matrix[i][j];
				})	
			});
		} else {

			self.rC(self.rows, function (i) {
				
				self.rC(self.cols, function (j) {
					self.matrix[i][j] += n;
				})	
			});
		}
	}

	mult(n) {

		var self = this;

		console.log(n instanceof Matrix);

		if (!(n instanceof Matrix)) {

			self.rC(self.rows, function (i) {
				
				self.rC(self.cols, function (j) {
					self.matrix[i][j] *= n;
				});	
			});
		} else {

			if (self.cols !== n.rows) {
				console.log("Row and col must be equal");

				return undefined;
			}

			var rM = new Matrix(self.rows, n.cols);
			rM.create("Null");

			self.rC(rM.rows, function (i) {
				
				self.rC(rM.cols, function (j) {

					let sum = 0;

					self.rC(self.cols, function (k) {
						sum += self.matrix[i][k] * n.matrix[k][j];
					});

					rM.matrix[i][j] = sum;

				});	
			});

			return rM;
			
		}
	}

	transpose() {
		var self = this;

		var rM = new Matrix(self.cols, self.rows);
		rM.create("Null");

		self.rC(self.rows, function (i) {
			self.rC(self.cols, function (j) {
				rM.matrix[j][i] = self.matrix[i][j];
			});
		});

		return rM;
	}

	display() {
		console.table(this.matrix);
	}
}
