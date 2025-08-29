 # Quiz (5 pytań ABCD + poprawna odpowiedź)

1. Which of the following measures of dispersion is not affected by outliers?
A. Variance
B. Standard Deviation
C. Mean Absolute Deviation
D. None of the above

Correct answer: C. Mean Absolute Deviation

2. Which of the following formulas represents the sample variance?
A. $\frac{1}{n}\sum_{i=1}^{n}(x_i - \bar{x})^2$
B. $\frac{1}{n-1}\sum_{i=1}^{n}(x_i - \bar{x})^2$
C. $\sqrt{\frac{1}{n}\sum_{i=1}^{n}(x_i - \bar{x})^2}$
D. $\sqrt{\frac{1}{n-1}\sum_{i=1}^{n}(x_i - \bar{x})^2}$

Correct answer: B. $\frac{1}{n-1}\sum_{i=1}^{n}(x_i - \bar{x})^2$

3. Which of the following statements is true for a population with a variance of 0?
A. All the data points are equal.
B. The data points are not normally distributed.
C. The data points are randomly distributed.
D. None of the above

Correct answer: A. All the data points are equal.

4. Which of the following is not a property of variance and standard deviation?
A. Both are measured in the same units as the original data.
B. Both can never be negative.
C. Both are measures of dispersion.
D. Standard deviation is easier to interpret than variance.

Correct answer: B. Both can never be negative.

5. Which of the following statements is true about the relationship between variance and standard deviation?
A. The variance is greater than the standard deviation.
B. The standard deviation is the square of the variance.
C. The variance and the standard deviation are equal.
D. The variance is always positive, the standard deviation can be negative.

Correct answer: B. The standard deviation is the square of the variance.

# Fiszki (5 sztuk)

1. Variance (σ², s²) - a measure of dispersion that indicates how far each number in a dataset is from the mean. It is the average of the squared differences from the mean.
2. Standard Deviation (σ, s) - a measure of dispersion that shows the amount of variation or dispersion of a set of values. It is the square root of the variance.
3. Population Variance - calculated as the average of the squared differences from the mean for the entire population: $\frac{1}{N}\sum_{i=1}^{N}(x_i - \mu)^2$
4. Sample Variance - calculated as the average of the squared differences from the mean for a sample: $\frac{1}{n-1}\sum_{i=1}^{n}(x_i - \bar{x})^2$
5. Coefficient of Variation - a statistical measure that expresses the dispersion of a distribution in relation to its mean, calculated as $\frac{\sigma}{\mu}$ or $\frac{s}{\bar{x}}$.

# Notatki (~200 słów)

Variance is a statistical measure of dispersion, which indicates how far each number in a dataset is from the mean. It is calculated as the average of the squared differences from the mean. The formula for population variance is:

$\frac{1}{N}\sum_{i=1}^{N}(x_i - \mu)^2$

While sample variance is calculated by:

$\frac{1}{n-1}\sum_{i=1}^{n}(x_i - \bar{x})^2$

 where $N$ and $n$ are the population and sample sizes respectively, $x_i$ is an individual data point, $\mu$ is the population mean, $\bar{x}$ is the sample mean and $\sum$ is the sum of all individual squared differences.

The reason we divide by $n-1$ instead of $n$ in the case of sample variance is to correct the bias in the estimation of the population variance. By dividing by $n-1$, we get a better estimate of the population variance with a smaller sample size.

Standard deviation is another measure of dispersion, which is defined as the square root of the variance. The formula for population standard deviation is:

$\sqrt{\frac{1}{N}\sum_{i=1}^{N}(x_i - \mu)^2}$

While sample standard deviation is calculated by:

$\sqrt{\frac{1}{n-1}\sum_{i=1}^{n}(x_i - \bar{x})^2}$

Standard deviation, like variance, is measured in the same units as the original data. It is often preferred to variance because it has the same units as the original data, making it easier to interpret and compare than variance.

The coefficient of variation (CV) is a statistical measure that expresses the dispersion of a distribution in relation to its mean, calculated as $\frac{\sigma}{\mu}$ or $\frac{s}{\bar{x}}$. It is often expressed as a percentage and provides information on the spread of data relative to its mean, making it easy to compare the dispersion of different datasets.

In summary, Variance, Standard Deviation and the coefficient of variation are all measures of dispersion, which give us information about the spread of data. Variance is a measure of the average of the squared differences from the mean, Standard deviation is the square root of variance and Coefficient of Variation is the ratio of standard deviation to mean. It is important to keep track of the differences in calculating population and sample variance and standard deviation, by adjusting the denominator to $n-1$ in case of sample.