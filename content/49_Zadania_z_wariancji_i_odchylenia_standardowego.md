 # Quiz

1. Which of the following formulas calculates the population variance?
   A. \(s^2 = \frac{1}{n} \sum_{i=1}^{n} (x_i - \mu)^2\)
   B. \(s^2 = \frac{1}{n-1} \sum_{i=1}^{n} (x_i - \mu)^2\)
   C. \(\sigma^2 = \frac{1}{n} \sum_{i=1}^{n} (x_i - \bar{x})^2\)
   D. \(\sigma^2 = \frac{1}{n-1} \sum_{i=1}^{n} (x_i - \bar{x})^2\)
   Answer: C

2. The standard deviation and variance are:
   A. The same value
   B. Always positive
   C. Measures of central tendency
   D. Measures of dispersion
   Answer: D

3. Which of the following statements is true regarding the sample standard deviation?
   A. It is calculated using the formula \(s = \sqrt{\frac{1}{n} \sum_{i=1}^{n} (x_i - \bar{x})^2}\)
   B. It is a measure of how much the data varies from the mean
   C. It is always greater than the population standard deviation
   D. It can never be negative
   Answer: A

4. If the variance of a set of data is 16, what is the standard deviation?
   A. 4
   B. 16
   C. 64
   D. Cannot be determined from the given information
   Answer: A

5. Which of the following has a greater effect on the standard deviation: a single outlier or a change in the mean?
   A. A single outlier
   B. A change in the mean
   C. Both have an equal effect
   D. Cannot be determined from the information given
   Answer: A

# Fiszki

1. Variance: a measure of how spread out data points are around the mean, calculated as the average of the squared differences from the mean.
2. Standard Deviation: the square root of the variance, representing the typical distance between data points and the mean.
3. Population Variance: calculated using the formula \(\sigma^2 = \frac{1}{n} \sum_{i=1}^{n} (x_i - \mu)^2\), where \(\mu\) is the population mean.
4. Sample Variance: calculated using the formula \(s^2 = \frac{1}{n-1} \sum_{i=1}^{n} (x_i - \bar{x})^2\), where \(\bar{x}\) is the sample mean.
5. Outlier: a data value that is significantly different from the other data values, which can greatly affect the standard deviation.

# Notatki

Variance is a measure of how spread out data points are around the mean. It is calculated as the average of the squared differences from the mean. The formula for population variance is \(\sigma^2 = \frac{1}{n} \sum_{i=1}^{n} (x_i - \mu)^2\), where \(\mu\) is the population mean. However, in most cases, we work with a sample rather than an entire population. The sample variance is calculated using the formula \(s^2 = \frac{1}{n-1} \sum_{i=1}^{n} (x_i - \bar{x})^2\), where \(\bar{x}\) is the sample mean. The reason for using \(n-1\) instead of \(n\) is to make the sample variance an unbiased estimator of the population variance.

Standard deviation is the square root of the variance and represents the typical distance between data points and the mean. Like variance, standard deviation is a measure of dispersion, meaning it measures how spread out the data is. However, because it is in the same units as the data, it is often easier to interpret than the variance.

It is important to note that both variance and standard deviation are affected by outliers. An outlier is a data value that is significantly different from the other data values. Outliers can greatly affect the variance and standard deviation, making them less representative of the typical distance between data points and the mean.

Finally, it is worth mentioning that there are different formulas for calculating variance and standard deviation depending on whether the data is given as a population or a sample. When working with a population, we use the formula \(\sigma^2 = \frac{1}{n} \sum_{i=1}^{n} (x_i - \mu)^2\) for population variance and \(\sigma = \sqrt{\frac{1}{n} \sum_{i=1}^{n} (x_i - \mu)^2}\) for population standard deviation. When working with a sample, we use the formulas \(s^2 = \frac{1}{n-1} \sum_{i=1}^{n} (x_i - \bar{x})^2\) for sample variance and \(s = \sqrt{\frac{1}{n-1} \sum_{i=1}^{n} (x_i - \bar{x})^2}\) for sample standard deviation. Using the correct formula is important for accurately measuring the variance and standard deviation of a dataset.