<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
	
	<html>
		<head>
			<title>XML XSL Example</title>
			<meta charset="utf-8" />

			<style type="text/css">
			th, td {
				padding: 3px 36px 3px 6px;
				text-align: left;
			}
			</style>
		</head>

		<body>
			<xsl:for-each select="/foods/item">
				
				<table border="1">
					<caption>Nutrition facts for <xsl:value-of select="@name" /></caption>

					<tr>
						<th>Serving size</th>
						<td><xsl:value-of select="servingsize" /></td>
					</tr>

					<tr>
						<th>Calories</th>
						<td><xsl:value-of select="calories" /></td>
					</tr>

					<tr>
						<th>Fat calories</th>
						<td><xsl:value-of select="fatcalories" /></td>
					</tr>

					<tr>
						<th>Fat</th>
						<td><xsl:value-of select="fat" /></td>
					</tr>

					<tr>
						<th>Saturated fat</th>
						<td><xsl:value-of select="saturatedfat" /></td>
					</tr>

					<tr>
						<th>Cholesterol</th>
						<td><xsl:value-of select="cholesterol" /></td>
					</tr>

					<tr>
						<th>Sodium</th>
						<td><xsl:value-of select="sodium" /></td>
					</tr>

					<tr>
						<th>Carbohydrates</th>
						<td><xsl:value-of select="carbohydrates" /></td>
					</tr>

					<tr>
						<th>Fibers</th>
						<td><xsl:value-of select="fibers" /></td>
					</tr>

					<tr>
						<th>Sugar</th>
						<td><xsl:value-of select="sugar" /></td>
					</tr>

					<tr>
						<th>Proteins</th>
						<td><xsl:value-of select="proteins" /></td>
					</tr>
				</table>

			</xsl:for-each>
		</body>
	</html>

</xsl:template>

<!--<xsl:template match="tutorial">
	<span class="tutorial-name"><xsl:value-of select="name"/></span>
	<span class="tutorial-url"><xsl:value-of select="url"/></span>
</xsl:template>-->

</xsl:stylesheet>